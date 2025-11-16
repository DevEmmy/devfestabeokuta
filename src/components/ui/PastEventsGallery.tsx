'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PastEventsGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current
    let currentIndex = 0
    const scrollDuration = 4000 // 4 seconds per slide

    const autoScroll = () => {
      const items = scrollContainer.children
      if (items.length === 0) return

      currentIndex = (currentIndex + 1) % items.length
      const item = items[currentIndex] as HTMLElement
      const itemWidth = item.offsetWidth
      const scrollPosition = currentIndex * (itemWidth + 16) // 16px is gap

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }

    const interval = setInterval(autoScroll, scrollDuration)
    return () => clearInterval(interval)
  }, [isMobile])

  // Placeholder gallery images - you can replace these with actual event photos
  const galleryImages = [
    {
      id: 1,
      src: '/./past1.jpg',
      alt: 'DevFest Abeokuta 2024 - Networking Session',
      title: 'Keynote Session',
      year: '2022'
    },
    {
      id: 2,
      src: '/./past5.jpg',
      alt: 'DevFest Abeokuta 2024 - Workshop',
      title: 'Keynote Session',
      year: '2022'
    },
    {
      id: 3,
      src: '/./past3.jpg',
      alt: 'DevFest Abeokuta 2024 - Keynote',
      title: 'Interactive Session',
      year: '2022'
    },
    {
      id: 4,
      src: '/./past4.jpg',
      alt: 'DevFest Abeokuta 2023 - Panel Discussion',
      title: 'Networking Session',
      year: '2022'
    },
    {
      id: 5,
      src: '/./past2.jpg',
      alt: 'DevFest Abeokuta 2023 - Hackathon',
      title: 'Event Banner',
      year: '2022'
    },
    {
      id: 6,
      src: '/./past6.jpg',
      alt: 'DevFest Abeokuta 2023 - Community',
      title: 'Event Registration',
      year: '2022'
    },
  ]

  const colors = ['#C3ECF6', '#F8D8D8', '#FCF6DF', '#CCF6C5']
  return (
    <section className="bg-[#fcf4f4] ">
      <div className='pb-12 sm:pb-20 sm:pt-10 px-4 bg-[#1e1e1e]  md:rounded-b-4xl'>
        <div className='general-space mx-auto mt-16'>
          {/* Section Header */}
          <div className="flex max-md:flex-col gap-10 items-start justify-between">
            <motion.div
              className='text-left mb-2 sm:mb-12 text-white max-md:text-center max-w-xl lg:max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-5xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black border-amber-600 max-md:leading-[4rem]' style={{
                WebkitTextStroke: '39px #fcf4f4',
                paintOrder: 'stroke markers fill',
                textShadow: '42px 35x 4px rgba(0,0,0,0.3)',
                WebkitTextStrokeColor: '#fcf4f4'

              }}>
                {/* Recap of Past Events */}
                A Look Back at Our Events
              </h2>
              <p className='text-base sm:text-lg text-white/80  mx-auto mt-8'>
                Revisit the best of DevFest Abeokuta — inspiring sessions, great people, unforgettable moments.
              </p>
            </motion.div>


            <Image src={'curl-icon.svg'} alt='curl' width={200} height={100} className='h-40 rotate-45 max-md:hidden ' />
          </div>

          {/* Gallery Container with Blur Edges */}
          <div className='relative'>
            {/* Left Fade Gradient - Mobile Only */}
            {/* <div className='absolute left-0 top-0 bottom-0 w-20 sm:hidden bg-gradient-to-r from-[#1e1e1e] to-transparent z-10 pointer-events-none' /> */}

            {/* Right Fade Gradient - Mobile Only */}
            {/* <div className='absolute right-0 top-0 bottom-0 w-20 sm:hidden bg-gradient-to-l from-[#1e1e1e] to-transparent z-10 pointer-events-none' /> */}

            {/* Gallery - Horizontal slider on mobile, grid on larger screens */}
            <div
              ref={scrollContainerRef}
              // className="space-y-3 py-3 sm:columns-2 sm:gap-2 md:columns-3 "
              className=' flex sm:grid sm:grid-cols-2  lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide scroll-smooth'
            >
              {galleryImages.map((image, index) => {
                const isActive = activeImage === image.id
                return (
                  <motion.div
                    key={image.id}
                    onClick={() => isMobile && setActiveImage(isActive ? null : image.id)}
                    className='group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-black shadow-lg sm:hover:shadow-2xl transition-all duration-300 sm:hover:-translate-y-2 flex-shrink-0 w-[85vw] sm:w-auto snap-center cursor-pointer'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Image */}
                    <div className='relative aspect-[4/3] overflow-hidden'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover transition-transform duration-500 ${isMobile
                          ? isActive ? 'grayscale-0 scale-110' : 'grayscale-100'
                          : 'grayscale-100 sm:group-hover:grayscale-0 sm:group-hover:scale-110'
                          } ${index === 1 && 'sm:group-grayscale-0'}`}
                        unoptimized
                      />

                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isMobile
                        ? isActive ? 'opacity-100' : 'opacity-0'
                        : 'opacity-0 sm:group-hover:opacity-100'
                        }`} />
                    </div>

                    {/* Info Card */}
                    <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 transition-transform duration-300 ${isMobile
                      ? isActive ? 'translate-y-0' : 'translate-y-full'
                      : 'translate-y-full sm:group-hover:translate-y-0'
                      }`}>
                      <div className='bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-black text-black'>
                        <p className='text-xs sm:text-sm font-semibold text-gray-600 mb-1'>{image.year}</p>
                        <h3 className='text-sm sm:text-lg font-bold'>{image.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div

            className='backdrop-blur-sm rounded-none  [#F9AB00] text-black mt-2 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            {['2000+', '40+', '15+', '3'].map((stat: any, index: number) => (
              <motion.div
                key={index}
                // #C3ECF6', '#F8D8D8', '#FCF6DF', '#CCF6C5
                className={`text-center text-[#1e1e1e] py-6  ${index == 0 ? 'bg-[#FFE7A5] lg:rounded-l-4xl max-lg:rounded-tl-4xl' : index == 1 ? 'bg-[#C3ECF6] max-lg:rounded-tr-4xl' : index == 2 ? 'bg-[#F8D8D8] max-lg:rounded-bl-4xl' : 'bg-[#CCF6C5] lg:rounded-r-4xl max-lg:rounded-br-4xl'} `}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2'>{stat}</h3>
                <div className='text-xs sm:text-sm md:text-base font-semibold text-black'>
                  {['Attendees', 'Speakers', 'Sponsors', 'Years'][index]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PastEventsGallery