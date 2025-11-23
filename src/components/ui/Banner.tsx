"use client"
import React, { useEffect, useRef } from 'react'
import GetTicketButton from './GetTicketButton'
import Image from 'next/image'
import { gsap } from 'gsap'
import DoodleRain from './DoodleRain'
import DoodleBg from './DoodleBg'
import CustomButton from './CustomButton'
import { Microphone, Moneys } from 'iconsax-react'

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lanyardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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
        // rotation: -5,     // fast spin
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, containerRef)
    return () => ctx.revert() // Cleanup
  }, [])


  return (
    <section className='max-md:py-3.5 max-md:px-4  md:p-10 h-screen '>




      <div

        ref={containerRef}
        className=' bg[#ccf6c5] bg[#f8d8d8] [#ffe7a5][#c3ecf6] relative  bg-[#CCF6C5] h-full rounded-3xl md:rounded-4xl pt-48 flex general-space flex-col items-center justify-center gap-5 sm:gap-5  opacity-0'
      >


        <div className='z-10 flex flex-col items-center justify-center gap-7 max-md:mt-28'>
          <div ref={lanyardRef} className='mb-6 max-md:hidden'>
            <Image
              // src={'/./avatar-c1.png'}
              src='https://devfestilorin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanyard.d957882b.png&w=3840&q=75'
              // src={'frame.png'}
              unoptimized
              alt='banner'
              width={800}
              height={1000}
              className='h-[40px] sm:h-[50px] lg:h-[60px] w-auto max-w-xl object-cover'
            />
          </div>

          <div className='relative'>
            <h1
              ref={titleRef}
              className='z-10 relative text-4xl max-md:text-5xl text-gray-800  flex items-center gap-2 sm:text-5xl md:text-6xl lg:text-[78px]  sm:leading-[40px] font-bold text-center'
            >


              <Image
                src='/./dgc-lockup.png'
                alt='DevFest Logo'
                width={100}
                height={100}
                className='h-7 sm:h-12 w-auto max-md:absolute max-md:top-10 max-md:-right-16 max-md:opacity-60 max-md:ring-offset-slate-500'
                unoptimized
              />

              <span className='relative md:ml-5'>
                <span className='max-md:leading-16 [#FF8A65]' style={{
                  WebkitTextStroke: '45px #fcf4f4',
                  paintOrder: 'stroke markers fill',
                  textShadow: '42px 35x 4px rgba(0,0,0,0.3)',
                  WebkitTextStrokeColor: '#fcf4f4'
                }}> <span className='text-[#FCF6DF] [#fcf4f4] text-[4px] '>{"~"}</span>Devfest Abeokuta 25."</span>
              </span>

            </h1>
          </div>

          <p
            ref={descriptionRef}
            className='md:leading-9 text-base max-md:text-base mt-2 sm:text-base lg:text-[18px] w-full sm:w-4/5 lg:w-2/3 text-center max-w-4xl text-black'
          >
            Devfest Abeokuta is a one-day event that brings together developers, designers, and entrepreneurs to learn, share, and grow together on December 6th, 2025.
          </p>

          <div
            ref={buttonsRef}
            className='flex max-sm:flex-col justify-center  items-center gap-3 sm:gap-4 w-full sm:w-auto relative mb-12'
          >
            <GetTicketButton isIcon />

            {/* <button
              className='bg-white border border-black text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto justify-center'
            >
              Apply to speak
            </button> */}

            {/* <CustomButton
              href="#schedule"
              label="Apply to speak"
              icon={<Microphone size="24" color="#FF8A65" className='text-purple-400' />}
              className="px-4 py-3 bg-white border border-black text-black"
              disabled
            /> */}

            <CustomButton
              href="/sponsor"
              label="Sponsor Us"
              icon={<Moneys size="24" color="#FF8A65" />}
              className="px-4 py-3 bg-white border border-black text-black "
            />

            {/* <CustomButton icon={ } label='Apply to speak' className='bg-white border border-black text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto justify-center' /> */}

          </div>


        </div>


        {/* <Image
          src='/./DevFest.png'
          alt='DevFest Logo'
          width={100}
          height={60}
          className='h-7 sm:h-12 w-auto max-md:absolute md:hidden max-md:bottom-3 max-md:opacity-60 object-cover'
          unoptimized
        /> */}

        <DoodleRain />

        <DoodleBg />


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

        <div ref={s3Ref} className='md:absolute max-md:hidden -bottom-[65px] -left-[30px] z-10'>
          <Image
            src='/./s3.png'
            alt='banner'
            width={1000}
            height={1000}
            className='w-[300px] xl:w-[400px]'
            unoptimized
          />
        </div>

        <div className='flex flex-col gap-3  p-4 absolute -right-16 max-md:hidden '>
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ffe7a5]  w-40 h-10 rotate-y-6  rounded-tl-4xl' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#c3ecf6]  w-40 h-10  ' />
          <div className='b-[#f8d8d8] border-5 border-[#1e1e1e] bg-[#ccf6c5] w-40 h-10 rounded-bl-4xl -rotate-x-3' />
        </div>



      </div>
    </section>
  )
}

export default Banner