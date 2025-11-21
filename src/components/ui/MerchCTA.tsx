"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CustomButton from "./CustomButton";
import TitleHead from "./TitleHead";
import { BagHappy } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import DoodleBg from "./DoodleBg";

interface MerchItem {
    src: string;
    name: string;
    price: string;
    link: string;
}

export default function MerchCTA() {
    const headerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const merchRefs = useRef<(HTMLDivElement | any)[]>([]);

    const merchItems: MerchItem[] = [
        {
            name: "Black Face Cap",
            price: "₦10,000",
            src: "/merch1.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/black-face-cap-82"
        },
        {
            name: "White Face Cap",
            price: "₦10,000",
            src: "/merch2.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/white-face-cap-81"
        },
        {
            name: "Notebook / Notepad",
            price: "₦10,000",
            src: "/merch3.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/notebook-notepad-80"
        },
        {
            name: "Coffee Mug",
            price: "₦10,000",
            src: "/merch4.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/coffee-mug-79"
        },
        {
            name: "Black Hoodie",
            price: "₦10,000",
            src: "/merch5.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/black-hoodie-78"
        },
        {
            name: "White Totshop/black-shirte Bag",
            price: "₦10,000",
            src: "/merch6.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/white-tote-bag-77"
        },
        {
            name: "Black Tote Bag",
            price: "₦10,000",
            src: "/merch7.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/black-tote-bag-76"
        },
        {
            name: "Black T-Shirt",
            price: "₦10,000",
            src: "/merch8.jpg",
            link: "https://devfestabeokutamerch.zigaarastore.com/product/black-t-shirt-75"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                opacity: 0,
                y: -40,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(itemsRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
            });

            merchRefs.current.forEach((item, index) => {
                if (item) {
                    gsap.from(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: 0.6 + index * 0.1,
                        ease: "sine.inOut"
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const handleHover = (index: number) => {
        gsap.to(merchRefs.current[index], {

            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleLeave = (index: number) => {
        gsap.to(merchRefs.current[index], {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div className="min-h-screen bg-[#fcf4f4] flex items-center justify-center py-10 " id="merch">
            <div className="general-space w-full relative">

                <div ref={headerRef}>
                    <TitleHead title="Merch" />
                </div>

                {/* Merch Grid */}

                <div
                    ref={itemsRef}
                    className="flex sm:flex-row md:grid md:grid-cols-4 gap-6 py-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth px-4 sm:px-6 no-scrollbar"
                >
                    {merchItems.map((item, i) => (
                        <div
                            ref={(el: any) => (merchRefs.current[i] = el)}
                            className="min-w-[70vw] sm:min-w-[50vw] md:min-w-0 snap-center cursor-pointer bg-white rounded-xl shadow-md border-2 border-black p-4 flex flex-col items-center justify-center hover:shadow-xl transition-all"
                            onMouseEnter={() => handleHover(i)}
                            onMouseLeave={() => handleLeave(i)}
                        >
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item?.src}
                                    alt={item.name}
                                    className="w-full h-40 object-contain rounded-xl"
                                    width={1000}
                                    height={1000}
                                />
                                <p className="mt-5 text-center text-black font-semibold text-lg">{item.name}</p>
                                <p className="text-gray-600 text-base mt-1.5 text-center">{item?.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>




                {/* CTA Button */}
                <CustomButton
                    href="https://devfestabeokutamerch.zigaarastore.com/shop?page=1"
                    label="Shop Merch"
                    icon={<BagHappy size={24} color="#4ADE80" />}
                    className="px-4 py-3 bg-black text-white mx-auto mb-10 hover:bg-[#374151] hover:text-gray-200"
                />
            </div>
        </div >
    );
}