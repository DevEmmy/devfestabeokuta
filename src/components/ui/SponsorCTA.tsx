import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Microphone, Moneys } from 'iconsax-react';
import CustomButton from './CustomButton';
import TitleHead from './TitleHead';
import DoodleBg from './DoodleBg';
import ComingSoonMask from './ComingSoonMask';

export default function SponsorCTA() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
      });

      // Sponsors card animation
      gsap.from(sponsorsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      // Logo animations
      logosRef.current.forEach((logo, index) => {
        if (logo) {
          gsap.from(logo, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: 0.6 + index * 0.1,
            ease: 'back.out(1.7)'
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleLogoHover = (index: number): void => {
    gsap.to(logosRef.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleLogoLeave = (index: number): void => {
    gsap.to(logosRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center py-10 relative" id='sponsors'>
      <div className="general-space w-full relative ">

        {/* <DoodleBg /> */}
        {/* Header */}
        <TitleHead title="Sponsors" />

        <ComingSoonMask>

          {/* Sponsors Card */}
          <div ref={sponsorsRef} className="max-md:grid md:flex flex-wrap max-md:grid-cols-2  gap-10   relative">
            {/* MALhub */}
            <div
              ref={(el: any) => logosRef.current[0] = el}
              className="cursor-pointer"
              onMouseEnter={() => handleLogoHover(0)}
              onMouseLeave={() => handleLogoLeave(0)}
            >
              <svg width="140" height="45" viewBox="0 0 140 45">
                <circle cx="22" cy="22" r="18" fill="#4A90E2" opacity="0.2" />
                <path d="M22 8 L22 36 M22 36 L14 28 M22 36 L30 28" stroke="#4A90E2" strokeWidth="3" fill="none" />
                <text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#2C3E50">MALhub</text>
                <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="10" fill="#7F8C8D">Create. Build. Develop.</text>
              </svg>
            </div>

            {/* Ilorin Innovation Hub */}
            <div
              ref={(el: any) => logosRef.current[1] = el}
              className="cursor-pointer"
              onMouseEnter={() => handleLogoHover(1)}
              onMouseLeave={() => handleLogoLeave(1)}
            >
              <svg width="150" height="50" viewBox="0 0 150 50">
                <path d="M15,10 L25,25 L15,40 L10,35 L17,25 L10,15 Z" fill="#34C759" />
                <path d="M25,10 L35,25 L25,40 L20,35 L27,25 L20,15 Z" fill="#30B350" />
                <path d="M35,10 L45,25 L35,40 L30,35 L37,25 L30,15 Z" fill="#2CA548" />
                <text x="55" y="22" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#2C3E50">Abeokuta</text>
                <text x="55" y="35" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#2C3E50">Innovation</text>
                <text x="55" y="45" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#34C759">Hub</text>
              </svg>
            </div>

            {/* Arveum */}
            <div
              ref={(el: any) => logosRef.current[2] = el}
              className="cursor-pointer"
              onMouseEnter={() => handleLogoHover(2)}
              onMouseLeave={() => handleLogoLeave(2)}
            >
              <svg width="180" height="50" viewBox="0 0 180 50">
                <path d="M20,35 L30,15 L40,35 M25,28 L35,28" stroke="#00B4D8" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="50" y="32" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#00B4D8">Arveum</text>
              </svg>
            </div>

            {/* xara */}
            <div
              ref={(el: any) => logosRef.current[3] = el}
              className="cursor-pointer"
              onMouseEnter={() => handleLogoHover(3)}
              onMouseLeave={() => handleLogoLeave(3)}
            >
              <svg width="140" height="50" viewBox="0 0 140 50">
                <path d="M15,15 L25,15 L30,25 L25,35 L15,35 Z" fill="#1E40AF" />
                <path d="M30,25 L40,15 L50,15 L40,25 L50,35 L40,35 Z" fill="#3B82F6" />
                <text x="60" y="32" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#1E293B">xara.</text>
              </svg>
            </div>

            {/* PIXEL PIONEER */}
            <div
              ref={(el: any) => logosRef.current[4] = el}
              className="cursor-pointer"
              onMouseEnter={() => handleLogoHover(4)}
              onMouseLeave={() => handleLogoLeave(4)}
            >
              <svg width="160" height="50" viewBox="0 0 160 50">
                <rect x="10" y="15" width="25" height="20" fill="#10B981" rx="2" />
                <rect x="18" y="18" width="9" height="6" fill="white" />
                <rect x="18" y="26" width="9" height="6" fill="white" />
                <text x="45" y="23" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#1E293B">PIXEL</text>
                <text x="45" y="38" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#10B981">PIONEER</text>
              </svg>
            </div>


          </div>


        </ComingSoonMask>


        {/* Sponsor Button */}
        <CustomButton
          href="/sponsor"
          label="Sponsor Us"
          icon={<Moneys size="24" color="#4ADE80" />}
          className="px-4 py-3 bg-black text-white mx-auto mb-10 hover:bg-[#374151] hover:text-gray-200"
        />

      </div>
    </div>
  );
}