"use client"
import React, { useEffect, useRef } from 'react'
import GetTicketButton from './GetTicketButton'
import Image from 'next/image'
import { gsap } from 'gsap'
import DoodleRain from './DoodleRain'

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lanyardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const hashRef = useRef<HTMLDivElement>(null)
  const s3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for orchestrated animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Initial state - set everything invisible
      gsap.set([lanyardRef.current, titleRef.current, descriptionRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30
      })

      gsap.set(lanyardRef.current, {
        scale: 0.8
      })

      gsap.set([hashRef.current, s3Ref.current], {
        opacity: 0
      })

      gsap.set(hashRef.current, { x: -50 })
      gsap.set(s3Ref.current, { x: 50 })

      // Animate in sequence
      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.1
      })
        .to(lanyardRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8
        }, "+=0.1")
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, "-=0.3")
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, "-=0.3")
        .to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, "-=0.3")
        .to(hashRef.current, {
          opacity: 1,
          x: 0,
          duration: 1
        }, "-=0.8")
        .to(s3Ref.current, {
          opacity: 1,
          x: 0,
          duration: 1
        }, "-=0.8")

      // Add continuous floating animation to decorative images
      gsap.to(hashRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      gsap.to(s3Ref.current, {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      // Lanyard shrink and fast spin animation at intervals

      gsap.to(lanyardRef.current, {
        scaleY: 0.8,       // shrink vertically
        rotation: -5,     // fast spin
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, containerRef)

    return () => ctx.revert() // Cleanup
  }, [])

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
  }


  // Pattern 1: Circuit Board
  const CIRCUIT_PATTERN =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-4v-1h4v-4h1v4zM0 95h4v1H0v4H-1v-4H-4v-1h4v-4H-1v4zM0 5h4v1H0v4H-1V5H-4V4h4V0H-1v4zM96 5h4v1h-4v4h-1V5h-4V4h4V0h1v4z'/%3E%3Cpath d='M96 4h1v1h-1V4zM0 4h1v1H0V4zM0 99h1v1H0v-1zM96 99h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

  // Pattern 2: Binary Code
  const BINARY_PATTERN =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ctext x='0' y='15' fill='%23000000' fill-opacity='0.1' font-size='10' font-family='monospace'%3E0101010101%3C/text%3E%3Ctext x='0' y='30' fill='%23000000' fill-opacity='0.1' font-size='10' font-family='monospace'%3E1010101010%3C/text%3E%3Ctext x='0' y='45' fill='%23000000' fill-opacity='0.1' font-size='10' font-family='monospace'%3E0011001100%3C/text%3E%3C/svg%3E\")";

  // Pattern 3: Plus Grid
  const PLUS_PATTERN =
    "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M10 0v20M0 10h20'/%3E%3C/g%3E%3C/svg%3E\")";


  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    if (!spotlightRef.current) return;

    // Get the mouse position relative to the card
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Apply the spotlight effect
    spotlightRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, transparent 100%)`;
    spotlightRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!spotlightRef.current) return;

    // Fade the spotlight out
    spotlightRef.current.style.opacity = '0';
  };

  return (
    <section className='  md:p-10 h-[100vh]'>




      <div
        ref={containerRef}
        className='  bg-[#ccf6c5] [#f8d8d8] [#ffe7a5] [c3ecf6]  [#ccf6c5] relative md:rounded-4xl h-full flex general-space flex-col items-center justify-center gap-7 sm:gap-5 px-4 sm:px-6 lg:px-8 opacity-0'
      >

        <DoodleRain />

        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-9-2v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-7-16v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundPosition: "center",
          }} />


        {/* --- BACKGROUND LAYER 2: Circuit Pattern (Subtle) --- */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: CIRCUIT_PATTERN,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* --- BACKGROUND LAYER 3: Binary Pattern (Offset) --- */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: BINARY_PATTERN,
            backgroundSize: "75px 75px",
            backgroundPosition: "25px 25px", // Offset to avoid overlap
          }}
        ></div>

        {/* --- BACKGROUND LAYER 4: Plus Pattern (Smallest) --- */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: PLUS_PATTERN,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* --- BACKGROUND LAYER 5: The Ripple/Spotlight Effect --- */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 ease-out"
        // Style is applied by JS
        ></div>


        <div className='z-99 flex flex-col items-center justify-center gap-7'>
          <div ref={lanyardRef} className='mb-6'>
            <Image
              src='https://devfestilorin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanyard.d957882b.png&w=3840&q=75'
              unoptimized
              alt='banner'
              width={1000}
              height={1000}
              className='h-[40px] sm:h-[50px] lg:h-[60px] w-auto'
            />
          </div>

          <h1
            ref={titleRef}
            className='z-99 relative text-4xl max-md:text-6xl flex items-center gap-2 sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center'
          >
            <Image
              src='/./dgc-lockup.png'
              alt='DevFest Logo'
              width={100}
              height={60}
              className='h-7 sm:h-12 w-auto max-md:absolute max-md:-top-10 max-md:-right-20'
              unoptimized
            /> <span className='text-gray-900'>Devfest Abeokuta '25</span>
          </h1>

          <div ref={lanyardRef} className='mb-6'>
            <Image
              src='https://devfestilorin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanyard.d957882b.png&w=3840&q=75'
              unoptimized
              alt='banner'
              width={1000}
              height={1000}
              className='h-[40px] sm:h-[50px] lg:h-[60px] w-auto md:hidden'
            />
          </div>

          <p
            ref={descriptionRef}
            className='text-sm max-md:text-lg mt-2 sm:text-base lg:text-[18px] w-full sm:w-4/5 lg:w-2/3 text-center max-w-4xl text-gray-600'
          >
            Devfest Abeokuta is a one-day event that brings together developers, designers, and entrepreneurs to learn, share, and grow together on December 6th, 2025.
          </p>

          <div
            ref={buttonsRef}
            className='flex justify-center  items-center gap-3 sm:gap-4 w-full sm:w-auto'
          >
            <GetTicketButton isIcon />

            <button
              className='bg-white border border-black text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto justify-center'
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={handleButtonClick}
            >
              Apply to speak
            </button>
          </div>
        </div>


        {/* Decorative Images */}
        <div ref={hashRef} className='md:absolute max-md:hidden bottom-20 left-[100px] -translate-x-1/2'>
          <Image
            src='/./hash.png'
            alt='banner'
            width={1000}
            height={1000}
            className='block w-[300px] xl:w-[400px]'
            unoptimized
          />
        </div>

        <div ref={s3Ref} className='absolute -bottom-[65px] -left-[30px] z-10'>
          <Image
            src='/./s3.png'
            alt='banner'
            width={1000}
            height={1000}
            className='w-[300px] xl:w-[400px]'
            unoptimized
          />
        </div>


        {/* <div ref={s3Ref} className='absolute bottom-2 right-[30px] z-10'>
          <Image
            src='/./dgc-lockup.png'
            alt='banner'
            width={100}
            height={100}
            className='w-[100px]'
            unoptimized
          />
        </div> */}

        {/* <Image
        src="wave-bg.svg"
        alt="banner"
        fill
        className="object-cover absolute top-0 right-0 bottom-0"
        unoptimized
      /> */}

        {/* <Imageref={s3Ref}
          src='lane.svg'
          alt='banner'
          width={1000}
          height={1000}
          className='absolute w-[300px] xl:w-[400px] right-1 bottom-0'
          unoptimized
        /> */}

        {/* <DoodleRain /> */}



        <div className='flex gap-20  p-4 absolute left-28 -top-16' ref={hashRef}>
          <div className='bg-red-400 [#f8d8d8] h-40 w-3 rotate-y-6 rounded-2xl ' />
          <div className='bg-[#f8d8d8] h-26 w-3  rounded-2xl' />
          <div className='bg-blue-400 rounded-2xl [#f8d8d8] h-40 w-3 -rotate-x-3' />
        </div>

        <div className='flex items-baseline gap-20  p-4 absolute right-28 -bottom-16' ref={s3Ref}>
          <div className='bg-green-400 rounded-2xl [#f8d8d8] h-40 w-3 rotate-y-12 ' />
          <div className='bg-purple-400 rounded-2xl -[#f8d8d8] h-26 w-3 ' />
          <div className='bg-rose-400 rounded-2xl -[#f8d8d8] h-40 w-3 -rotate-x-3' />
        </div>

        <div className='flex flex-col gap-3  p-4 md:absolute -right-16 max-md:hidden '>
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ffe7a5]  w-40 h-10 rotate-y-6  rounded-tl-4xl' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#c3ecf6]  w-40 h-10  ' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ccf6c5] w-40 h-10 rounded-bl-4xl -rotate-x-3' />
        </div>

        {/* <div className='flex gap-24  p-4 absolute right-7 -top-16'>
          <div className='bg-[#f8d8d8] h-40 w-2.5 rotate-y-12 ' />
          <div className='bg-[#f8d8d8] h-40 w-2.5 ' />
          <div className='bg-[#f8d8d8] h-40 w-2.5 -rotate-x-3' />
        </div> */}




      </div>
    </section>
  )
}

export default Banner