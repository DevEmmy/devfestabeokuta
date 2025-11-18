"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DoodleBg from "./DoodleBg";
import TitleHead from "./TitleHead";
import { MdArrowOutward } from "react-icons/md";
import { GiLaurelCrown } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { TbShieldCode } from "react-icons/tb";


gsap.registerPlugin(ScrollTrigger);

type Tier = {
    id: string;
    title: string;
    price: string;
    popular?: boolean;
};
const tiers = [
    {
        id: "silver",
        title: "Silver",
        price: "₦300,000",
        gradient: "from-gray-600 via-gray-400 to-gray-300",
        borderGradient: "from-gray-400 via-gray-200 to-gray-400",
        icon: TbShieldCode,
        popular: false,
        features: [
            "Access to Keynote Talks",
            "Participation in Technical Workshops",
            "Networking with Peers",
            "Event Swag & Merchandise"
        ],
        accentColor: "#9ca3af"
    },
    {
        id: "gold",
        title: "Gold",
        price: "₦500,000",
        gradient: "from-amber-700 via-yellow-500 to-amber-400",
        borderGradient: "from-yellow-400 via-yellow-200 to-yellow-400",
        icon: LiaAwardSolid,
        popular: true,
        features: [
            "All Silver Tier Benefits",
            "Exclusive Hackathon Participation",
            "Access to Mentor Sessions",
            "Priority Seating at Talks"
        ],
        accentColor: "#fbbf24"
    },
    {
        id: "platinum",
        title: "Platinum",
        price: "₦900,000",
        gradient: "from-slate-800 via-slate-600 to-slate-400",
        borderGradient: "from-slate-400 via-slate-200 to-slate-400",
        icon: GiLaurelCrown,
        popular: false,
        features: [
            "All Gold Tier Benefits",
            "VIP Networking with Speakers & Sponsors",
            "Private Workshops & Labs",
            "Recognition in Event Promotions"
        ],
        accentColor: "#94a3b8"
    },
];


const SponsorshipPackages = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
    const tiltDataRef = useRef<
        { mt: number; mw: number; mh: number } | undefined
    >(undefined);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation with ScrollTrigger
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    markers: false,
                    toggleActions: "play none none reverse",
                },
            });

            // Prepare tilt data (used for normalizing mouse positions)
            // We will compute per-card sizes on the fly in the mouse handlers.
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.killTweensOf(cardsRef.current);
        };
    }, []);

    // tilt handlers
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // find card being hovered (closest ancestor with data-idx)
            const target = e.target as HTMLElement | null;
            const cardEl = target?.closest?.("[data-idx]") as HTMLDivElement | null;
            if (!cardEl) return;

            const idxAttr = cardEl.getAttribute("data-idx");
            if (!idxAttr) return;
            const idx = Number(idxAttr);
            const card = cardsRef.current[idx];
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width; // 0..1
            const py = (e.clientY - rect.top) / rect.height; // 0..1

            // Map to rotation [-8deg..8deg]
            const rotateY = (px - 0.5) * 16; // left -> positive Y rotation
            const rotateX = -((py - 0.5) * 12); // top -> positive X rotation

            const depth = 18; // translateZ for inner content (subtle)
            // Apply transform to card
            gsap.to(card, {
                rotationY: rotateY,
                rotationX: rotateX,
                transformPerspective: 900,
                transformOrigin: "center",
                scale: 1.01,
                duration: 0.25,
                ease: "power2.out",
            });

            // Slight inner pop for children
            const inner = card.querySelector(".card-inner") as HTMLElement | null;
            if (inner) {
                gsap.to(inner, {
                    translateZ: depth,
                    duration: 0.25,
                    ease: "power2.out",
                });
            }
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const cardEl = target?.closest?.("[data-idx]") as HTMLDivElement | null;
            if (!cardEl) return;
            const idxAttr = cardEl.getAttribute("data-idx");
            if (!idxAttr) return;
            const idx = Number(idxAttr);
            const card = cardsRef.current[idx];
            if (!card) return;

            // Reset transforms
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.6)",
            });

            const inner = card.querySelector(".card-inner") as HTMLElement | null;
            if (inner) {
                gsap.to(inner, {
                    translateZ: 0,
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        };

        // Attach listeners at document level to capture events from children
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave, true);
        document.addEventListener("mouseout", (ev) => {
            // if leaving the card area, reset nearest card (safety)
            const to = ev.relatedTarget as HTMLElement | null;
            if (!to || !to.closest) {
                // reset all cards
                cardsRef.current.forEach((card) =>
                    card &&
                    gsap.to(card, {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out",
                    })
                );
            }
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave, true);
        };
    }, []);

    // hover ripple/pulse (staggered) effect
    useEffect(() => {
        const handleMouseEnterCard = (e: Event) => {
            // When entering one card, pulse all cards with a small stagger
            const tl = gsap.timeline();
            tl.to(cardsRef.current, {
                scale: 1.02,
                boxShadow: "0px 24px 48px rgba(0,0,0,0.12)",
                duration: 0.28,
                ease: "power1.inOut",
                stagger: {
                    each: 0.06,
                    from: "center",
                },
            }).to(cardsRef.current, {
                scale: 1,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.08)",
                duration: 0.28,
                ease: "power1.inOut",
                stagger: {
                    each: 0.06,
                    from: "center",
                },
            });
            // auto-kill after done
            tl.play();
        };

        const handleMouseLeaveCard = (e: Event) => {
            // on leave, ensure cards reset
            gsap.to(cardsRef.current, {
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.08)",
                duration: 0.45,
                ease: "power3.out",
            });
        };

        // attach listeners to each card
        cardsRef.current.forEach((card) => {
            if (!card) return;
            card.addEventListener("mouseenter", handleMouseEnterCard);
            card.addEventListener("mouseleave", handleMouseLeaveCard);
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (!card) return;
                card.removeEventListener("mouseenter", handleMouseEnterCard);
                card.removeEventListener("mouseleave", handleMouseLeaveCard);
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className=" my-12 w-full p-10 max-md:p-4.5 bg-[#f0f0f0] general-space rlative "
            aria-label="sponsorship packages"
        >


            <div className=" [#f8d8d9] rounded-4xl container mx-auto w-full ">


                <div className="text-center mb-12">
                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
                        Sponsorship Packages
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                        Choose the package that best fits your goals
                    </p> */}

                    <TitleHead title="Packages" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-6 pb-16  overflow-x-hidden overflow-y-visible">

                    {tiers.map((tier, i) => {
                        const IconComponent = tier.icon;
                        return (
                            <div
                                key={tier.id}
                                ref={(el: any) => (cardsRef.current[i] = el)}
                                className="relative cursor-pointer "
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: 100,
                                    WebkitTransformStyle: "preserve-3d",
                                }}
                            >
                                {/* Popular badge */}
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                {/* Card container */}
                                <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-500">
                                    {/* Animated gradient border */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${tier.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

                                    {/* Spotlight effect */}
                                    <div className="spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div
                                        className="relative p-8 lg:p-10"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            WebkitTransformStyle: "preserve-3d",
                                            transform: "translateZ(20px)",
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div
                                                className="inline-flex p-4 rounded-2xl bg-gradient-to-br shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                                                style={{
                                                    background: `linear-gradient(135deg, ${tier.accentColor}30, ${tier.accentColor}10)`,
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                                <IconComponent
                                                    className="w-8 h-8 relative z-10"
                                                    style={{ color: tier.accentColor }}
                                                    strokeWidth={2}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-2">
                                            {tier.title}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl lg:text-6xl font-extrabold text-white">
                                                    {tier.price}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm mt-1">per year</p>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-4 mb-8">
                                            {tier.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br mt-0.5 flex items-center justify-center"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}80)`,
                                                        }}>
                                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <button
                                            className="w-fit px-4 py-4 rounded-4xl font-semibold text-white transition-all duration-300 relative overflow-hidden group/btn shadow-lg hover:shadow-xl"
                                            style={{
                                                background: `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}cc)`,
                                            }}
                                        >
                                            <span className="relative z-10"><MdArrowOutward /></span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                                        </button>

                                        {/* Decorative orbs */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30"
                                            style={{ background: tier.accentColor }} />
                                        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-20"
                                            style={{ background: tier.accentColor }} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>


            </div>

        </section>
    );
}

export default SponsorshipPackages