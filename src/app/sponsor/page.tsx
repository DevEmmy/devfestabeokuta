'use client';
import { gsap } from 'gsap'

import React, { useRef, useEffect } from 'react'
import NavBar from '@/components/nav/NavBar'
import Footer from '@/components/ui/Footer'
import DoodleBg from '@/components/ui/DoodleBg'
import Image from 'next/image'
import DoodleRain from '@/components/ui/DoodleRain'
import CustomButton from '@/components/ui/CustomButton';
import { Microphone } from 'iconsax-react';
import SponsorshipPackages from '@/components/ui/SponsorshipPackages';

const SponsorPage = () => {

  const hashRef = useRef<HTMLDivElement>(null)
  const s3Ref = useRef<HTMLDivElement>(null)



  const VisibilityIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );

  const TalentIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
      />
    </svg>
  );

  const InnovationIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );


  const sponsorBenefits = [
    {
      title: "Brand Visibility",
      description:
        "Reach 500+ developers, tech leaders, and innovators. Get your brand featured across all event materials and social media channels.",
      icon: VisibilityIcon,
      background: "bg-[#FF7DAF]/35",
    },
    {
      title: "Talent Acquisition",
      description:
        "Connect with top-tier developers actively seeking opportunities. Host recruitment sessions and build your talent pipeline.",
      icon: TalentIcon,
      background: "bg-[#FFD427]/35",
    },
    {
      title: "Innovation Showcase",
      description:
        "Demonstrate your latest technologies, products, and solutions to an engaged audience of tech enthusiasts and decision-makers.",
      icon: InnovationIcon,
      background: "bg-[#CCF6C5]/35",
    },
  ];

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);


  return (
    <main className=''>
      <NavBar />



      <section className="bg-[#CCF6C5]/90 [#ccf6c5] bg[#f8d8d9] [#fcf4f4] [#f0f0f0]  [#f8d8d9] h-[72vh] m-4.5 md:m-10 rounded-4xl relative ">

        <DoodleBg />
        <DoodleRain />
        <div className='relative grid place-items-center-safe h-full '>

          <div className="mt-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-14 text-center font-bold mb-4 sm:mb-6 text-black"
              style={{
                WebkitTextStroke: '39px #fcf4f4',
                paintOrder: 'stroke markers fill',
                textShadow: '42px 35x 4px rgba(0,0,0,0.3)',
                WebkitTextStrokeColor: '#fcf4f4'

              }}>
              Sponsorship Opportunities
            </h1>
            <p className="text-base sm:text-lg px-6 md:text-xl text-gray-900 text-center mt-10 max-w-xl mx-auto">
              Join DevFest Abeokuta 2025 and be part of the most exciting tech event in the region
            </p>

            <CustomButton
              // href="#schedule"
              href="mailto:sponsors@devfestabeokuta.com?subject=Sponsorship Inquiry"
              label="Sponsor Us"
              icon={<Microphone size="24" color="#FF8A65" className='text-purple-400' />}
              // clor="#EA4335"
              className='mx-auto mt-16 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto justify-center'
            />
          </div>




        </div>

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

        <div ref={s3Ref} className='md:absolute max-md:hidden -bottom-[77px] -left-[30px] z-10'>
          <Image
            src='/./s3.png'
            alt='banner'
            width={1000}
            height={1000}
            className='w-[300px] xl:w-[400px]'
            unoptimized
          />
        </div>

        <div className='flex flex-col gap-3  p-4 absolute bottom-1/6  -right-16 max-md:hidden '>
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ffe7a5]  w-40 h-10 rotate-y-6  rounded-tl-4xl' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#c3ecf6]  w-40 h-10  ' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ccf6c5] w-40 h-10 rounded-bl-4xl -rotate-x-3' />
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="general-space">
        <div className="mx-auto">
          <div className="flex items-center justify-between mb-18">
            <div className="max-md:text-center ">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Why Sponsor DevFest Abeokuta?</h2>
              <p className="text-base sm:text-lg text-white/80">Partner with us and unlock incredible opportunities</p>
            </div>


            <Image src={'curl-icon.svg'} alt='curl' width={200} height={100} className='h-40 rotate-45 max-md:hidden ' />
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 relative">
            <DoodleRain />
            {sponsorBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={(el: any) => (cardsRef.current[i] = el!)}
                  className={`${item?.background}  backdrop-blur-3xl rounded-4xl p-6 shadow-lg border-[12px] md:border-[24px] border-spacing-x-12 border-[#1e1e1e]/90 border-double  `}
                >
                  <DoodleBg />
                  <div className="w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center mb-4">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-gray-50 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <SponsorshipPackages />

      {/* Contact Section */}
      <section className="general-space mb-28">
        <div className="max-w-3xl mx-auto border-12 border-[#4285f4] [#f6b51e] md:p-4 rounded-3xl relative">


          <div className="bg-white rounded-2xl border-2 border-black pt-28 pb-14 md:py-28 px-5 text-center shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Ready to Become a Sponsor?</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a partnership that benefits both our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sponsors@devfestabeokuta.com?subject=Sponsorship Inquiry"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+2341234567890"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white border-2 border-black text-black rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          <Image src={'/community.svg'} width={250} height={100} alt='community' className='absolute right-0 md:-left-29 -top-28' />
        </div>
      </section>


      <Footer />
    </main>
  )
}

export default SponsorPage
