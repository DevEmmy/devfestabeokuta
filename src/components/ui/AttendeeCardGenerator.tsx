'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import html2canvas from "html2canvas";

const PREVIEW_BACKGROUND = '#f9fafb'
const HTML2CANVAS_TIMEOUT_MS = 12000
const FONT_READY_TIMEOUT_MS = 6000

const AttendeeCardGenerator = () => {
    const [userImage, setUserImage] = useState<string | null>(null)
    const [userName, setUserName] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [cardColor, setCardColor] = useState('#f0f0f0')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const scaleFactor = 3;
    
    const colorOptions = [
        '#f0f0f0',
        '#c3ecf6',
        '#ccf6c5',
        '#f8d8d8',
        '#ffe7a5'
    ]

    const withTimeout = <T,>(promise: Promise<T>, timeout: number, timeoutMessage: string) => {
        return new Promise<T>((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error(timeoutMessage))
            }, timeout)

            promise
                .then((value) => {
                    clearTimeout(timer)
                    resolve(value)
                })
                .catch((error) => {
                    clearTimeout(timer)
                    reject(error)
                })
        })
    }

    const waitForFonts = async () => {
        if (typeof document === 'undefined') return
        const fontSet = document.fonts
        if (!fontSet || fontSet.status === 'loaded') return

        try {
            await withTimeout(
                fontSet.ready,
                FONT_READY_TIMEOUT_MS,
                'Font loading timed out'
            )
        } catch (error) {
            console.warn('Continuing without waiting for fonts:', error)
        }
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const img = new window.Image()
                img.onload = () => {
                    // Create a canvas to crop and resize the image
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext('2d')

                    if (!ctx) return

                    // Target dimensions (aspect ratio for the card)
                    const targetWidth = 180 * scaleFactor
                    const targetHeight = 192 * scaleFactor

                    canvas.width = targetWidth
                    canvas.height = targetHeight

                    // Calculate how to crop the image to cover the entire area
                    const imgAspect = img.width / img.height
                    const targetAspect = targetWidth / targetHeight

                    let sourceX = 0
                    let sourceY = 0
                    let sourceWidth = img.width
                    let sourceHeight = img.height

                    if (imgAspect > targetAspect) {
                        // Image is wider than target, crop width
                        sourceWidth = img.height * targetAspect
                        sourceX = (img.width - sourceWidth) / 2
                    } else {
                        // Image is taller than target, crop height
                        sourceHeight = img.width / targetAspect
                        sourceY = (img.height - sourceHeight) / 2
                    }

                    // Draw the cropped and scaled image
                    ctx.drawImage(
                        img,
                        sourceX, sourceY, sourceWidth, sourceHeight,
                        0, 0, targetWidth, targetHeight
                    )

                    // Convert to data URL
                    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.9)
                    setUserImage(croppedDataUrl)
                }
                img.src = reader.result as string
            }
            reader.readAsDataURL(file)
        }
    }

    const scrubOklchColors = (clonedDoc: Document) => {
        const styleSheets = clonedDoc.styleSheets;
        for (let i = 0; i < styleSheets.length; i++) {
            try {
                const rules = styleSheets[i].cssRules || styleSheets[i].rules;
                if (!rules) continue;
                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j] as CSSRule & { style?: CSSStyleDeclaration };
                    if (!rule.style) continue;
                    for (let k = 0; k < rule.style.length; k++) {
                        const prop = rule.style[k];
                        const value = rule.style.getPropertyValue(prop);
                        if (value && value.includes('oklch')) {
                            rule.style.setProperty(prop, 'rgb(229, 231, 235)', 'important');
                        }
                    }
                }
            } catch (e) {
                // Cross-origin stylesheets will throw
            }
        }

        const clonedGetComputedStyle = clonedDoc.defaultView?.getComputedStyle;
        if (clonedGetComputedStyle && clonedDoc.defaultView) {
            clonedDoc.defaultView.getComputedStyle = function (el: Element, pseudo?: string | null) {
                const styles = clonedGetComputedStyle.call(this, el, pseudo);
                const proxy = new Proxy(styles, {
                    get(target, prop) {
                        const value = target[prop as keyof typeof target];
                        if (typeof value === 'string' && value.includes('oklch')) {
                            return 'rgb(229, 231, 235)';
                        }
                        return value;
                    }
                });
                return proxy;
            };
        }
    };

    const captureCardImage = async (target: HTMLElement) => {
        await waitForFonts();

        const options: Parameters<typeof html2canvas>[1] = {
            scale: 2,
            useCORS: true,
            backgroundColor: PREVIEW_BACKGROUND,
            logging: false,
            allowTaint: true,
            imageTimeout: HTML2CANVAS_TIMEOUT_MS,
            onclone: scrubOklchColors
        };

        const canvas = await withTimeout(
            html2canvas(target, options),
            HTML2CANVAS_TIMEOUT_MS + 2000,
            'html2canvas timed out'
        );

        return canvas.toDataURL('image/png');
    };

    const getDownloadFileName = () => {
        const sanitized = userName
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-_]/g, '');
        return `devfest-abeokuta-${sanitized || 'attendee'}.png`;
    };

    const triggerDownload = (dataUrl: string) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = getDownloadFileName();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = async (): Promise<boolean> => {
        const element = document.getElementById("capture");
        if (!element) return false;

        setIsGenerating(true);

        try {
            const image = await captureCardImage(element as HTMLElement);
            triggerDownload(image);
            return true;
        } catch (err) {
            console.error("Capture failed:", err);
            alert("Failed to generate image. Please try again.");
            return false;
        } finally {
            setIsGenerating(false);
        }
    };

    const handleShare = async () => {
        if (!userImage || !userName.trim()) return

        // handleDownload handles the isGenerating state
        const success = await handleDownload()
        if (success) {
            const text = `I'm attending DevFest Abeokuta 2025! 🚀\n\nJoin me and the amazing community. Generate your personalized DP here 👇\n`
            const hashtags = 'DevFestAbeokuta,DevFestAbk2025,GDGAbeokuta'
            const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://devfestabeokuta.com/#attendee-card-generator \n'

            const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=${hashtags}&url=${encodeURIComponent(shareUrl)}`
            window.open(twitterIntentUrl, '_blank')
        }
    };

    return (
        <div className='py-16 sm:py-20 px-4 bg-[#f8d8d9]' id='attendee-card-generator'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-8 sm:mb-12'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4'>
                        Generate Your Attendance Card
                    </h2>
                    <p className='text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4'>
                        Upload your photo and create a personalized card to show you're attending DevFest Abeokuta 2025!
                    </p>
                </div>

                {/* Card Generator */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start'>
                    {/* Input Section */}
                    <div className='bg-white rounded-xl sm:rounded-2xl border-2 border-black p-6 sm:p-8'>
                        <h3 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>Your Details</h3>

                        {/* Name Input */}
                        <div className='mb-4 sm:mb-6'>
                            <label htmlFor='name' className='block text-sm font-semibold mb-2'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder='Enter your name'
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base'
                            />
                        </div>

                        {/* Image Upload */}
                        <div className='mb-4 sm:mb-6'>
                            <label htmlFor='image' className='block text-sm font-semibold mb-2'>
                                Upload Your Photo
                            </label>
                            <div className='border-2 border-dashed border-black rounded-lg p-4 sm:p-6 lg:p-8 text-center'>
                                <input
                                    ref={fileInputRef}
                                    type='file'
                                    id='image'
                                    accept='image/*'
                                    onChange={handleImageUpload}
                                    className='hidden'
                                />
                                {userImage ? (
                                    <div className='space-y-3 sm:space-y-4'>
                                        <div className='relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-black'>
                                            <Image
                                                src={userImage}
                                                alt='Preview'
                                                fill
                                                className='object-cover'
                                                unoptimized
                                            />
                                        </div>
                                        <p className='text-xs sm:text-sm text-gray-600'>Image uploaded successfully!</p>
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className='text-xs sm:text-sm text-blue-600 hover:underline'
                                        >
                                            Change photo
                                        </button>
                                    </div>
                                ) : (
                                    <div className='space-y-3 sm:space-y-4'>
                                        <svg
                                            className='w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                                            />
                                        </svg>
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className='bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base'
                                        >
                                            Choose Photo
                                        </button>
                                        <p className='text-xs sm:text-sm text-gray-600'>
                                            JPG, PNG or GIF (Max. 5MB)
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                         {/* Color Selector */}
                         <div className='mb-4 sm:mb-6'>
                             <label className='block text-sm font-semibold mb-2'>
                                 Card Background Color
                             </label>
                             <div className='flex gap-2 sm:gap-3'>
                                 {colorOptions.map((color) => (
                                     <button
                                         key={color}
                                         onClick={() => setCardColor(color)}
                                         className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-none transition-all ${
                                             cardColor === color
                                                 ? 'border-black !border scale-110'
                                                 : 'border-none hover:border-gray-400'
                                         }`}
                                         style={{ backgroundColor: color }}
                                         aria-label={`Select color ${color}`}
                                     />
                                 ))}
                             </div>
                         </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                            <button
                                onClick={handleDownload}
                                disabled={!userImage || !userName.trim() || isGenerating}
                                className='flex-1 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-base'
                            >
                                {isGenerating ? 'Generating...' : 'Generate Card'}
                            </button>
                            <button
                                onClick={() => {
                                    if (fileInputRef.current) {
                                        fileInputRef.current.value = ''
                                    }
                                    setUserImage(null)
                                    setUserName('')
                                    setCardColor('#f0f0f0')
                                }}
                                className='px-4 sm:px-6 py-2 sm:py-3 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base'
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className=''>
                        <h3 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>Preview</h3>
                         <div id="capture" style={{
                             backgroundColor: '#f9fafb',
                             borderRadius: '12px',
                             padding: '16px',
                             position: 'relative',
                             maxWidth: '100%',
                             overflow: 'hidden',
                             backgroundImage: `
                 linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                 linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
               `,
                             backgroundSize: '40px 40px'
                         }}>
                             <div style={{
                                 backgroundColor: cardColor,
                                 border: '3px solid #000000',
                                 borderRadius: '12px',
                                 padding: '24px',
                                 boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                                 
                                 
                             }}>
                                {/* Top Section */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                    <img src='/./devfest-abklogo.png' alt='DevFest' style={{ width: 'auto', height: '60px', display: 'block', objectFit: 'contain' }} />

                             
                                </div>

                                 {/* Main Content */}
                                 <div className="grid grid-cols-2 gap-4 items-center">
                                     {/* Left - Text Content */}
                                     <div className="flex flex-col gap-1">
                                         <div>
                                             <p className="text-sm mb-1">I will be attending</p>
                                             <h1 className="text-xl md:text-3xl font-bold leading-tight">DevFest <br className='block md:hidden' />ABEOKUTA <br className='block md:hidden' />2025</h1>
                                         </div>
                                         <div>
                                             <p className="font-semibold text-base">{userName || 'Firstname'}</p>
                                             <p className="text-sm">Dec 6th</p>
                                         </div>
                                     </div>

                                     {/* Right - Profile Image */}
                                     <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                                        {userImage ? (
                                            <img
                                                src={userImage}
                                                alt='Preview'
                                                className="w-full h-full rounded-lg border-2 border-black object-cover object-center"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                                                <div className="text-center text-gray-500">
                                                    <svg
                                                        className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2"
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                                                        />
                                                    </svg>
                                                    <p className="text-xs">Upload photo</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div style={{ marginTop: '24px' }}>
                                    <img src='/./avatar-c1.png' alt='DevFest' style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Share Section */}
                <div className='mt-8 sm:mt-12 text-center'>
                    <p className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Share your attendance with the community!</p>
                    <div className='flex justify-center gap-3 sm:gap-4'>
                        <button
                            onClick={handleShare}
                            disabled={isGenerating || !userImage || !userName.trim()}
                            className='bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed'
                        >
                            <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                            </svg>
                            Share on Twitter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendeeCardGenerator

