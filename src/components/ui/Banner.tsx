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


  return (
    <section className='  md:p-10 h-[100vh]'>




      <div
        ref={containerRef}
        className='  bg-[#ccf6c5] [#f8d8d8] [#ffe7a5] [c3ecf6]  [#ccf6c5] relative md:rounded-4xl h-full flex general-space flex-col items-center justify-center gap-7 sm:gap-5 px-4 sm:px-6 lg:px-8 opacity-0'
      >

        <DoodleRain />


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
            className='z-99 text-4xl flex items-center gap-2 sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center'
          >
            <Image
              src='/./dgc-lockup.png'
              alt='DevFest Logo'
              width={100}
              height={60}
              className='h-7 sm:h-12 w-auto'
              unoptimized
            /> <span className='text-gray-900'>Devfest Abeokuta '25</span>
          </h1>

          <p
            ref={descriptionRef}
            className='text-sm mt-2 sm:text-base lg:text-[18px] w-full sm:w-4/5 lg:w-2/3 text-center max-w-4xl text-gray-600'
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
        <div ref={hashRef} className='absolute bottom-20 left-[100px] -translate-x-1/2'>
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