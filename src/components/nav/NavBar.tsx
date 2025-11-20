'use client'

import React, { useEffect, useRef, useState } from 'react'
import GetTicketButton from '../ui/GetTicketButton'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu2Line } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'
import InvertedCursor from '../ui/InvertedCursor'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nav = [
    {
      title: "Gallery",
      link: "/#gallery"
    },
    // {
    //   title: "Get Profile Card",
    //   link: "/#get-profile-card"
    // },
    {
      title: "Agenda",
      link: "/#agenda"
    },
    {
      title: "Speakers",
      link: "/#speakers"
    },
    //     {
    //   title: "Sponsors",
    //   link: "/#sponsors"
    // }
  ]
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const width = window.innerWidth;

      // Only animate on md screens and above
      if (width < 768) return;

      if (window.scrollY >= 10) {
        // Animate OUT
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Animate IN
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ${isMenuOpen ? 'max-md:bg-[#fcf4f4]' : 'max-md:bg-white/20'}

  const [active, setActive] = useState<number | null>(null)
    const router = useRouter()
  return (
    <>
      <InvertedCursor />
      <motion.nav
        className={`flex justify-between px-5 sm:px-6 2xl:px-[12rem]  ${isMenuOpen ? 'bg-[#f0f0f0] [#1e1e1e] px-[36px] py-[18px]' : 'max-md:backdrop-blur-xl max-md:bg-[#f0f0f0]/20 max-md:rounded-2xl max-md:mx-4 max-md:mt-3.5 '}   md:rounded-4xl   max-md:backdrop-blu-sm  max-w-[150rem] md:mx-auto items-center py-1 sm:py-5 fixed top-0 md:top-10 left-0 right-0 z-50 `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // className='bg-white/20 backdrop-blur-sm '
          onClick={() =>  {window.location.href = '/'} }
        >
          <Image
            src='/./devfest-abklogo.png'
            alt='logo'
            width={1000}
            height={1000}
            className='w-[120px] sm:w-[150px]'
            unoptimized
            ref={imageRef}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6 xl:gap-8 items-center pr-3 pl-7 py-3 rounded-4xl bg-white/40 backdrop-blur-sm'>
          {nav.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setActive(index)}
              className={`
              ${index == active && 'bg-amber-100 rounded-2xl px-3 py-2'}`}

            >
              <Link
                href={item.link}
                className='text-sm xl:text-base font-medium hover:text-gray-600 transition-colors relative group'
              >
                {item.title}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full transition-all duration-300' />
              </Link>
            </motion.div>
          ))}


          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <GetTicketButton style='px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 border-4 border-[#34A853] [#FF8A65] [#ea4335] [#c3ecf6]' />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 rounded-lg  transition-colors'
          aria-label='Toggle menu'
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className=' mix-blend-difference bg-white/30  p-1.5 rounded-full invert-0'
          >
            <RiMenu2Line size={25} color='#444' />
          </motion.div>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className='absolute top-full py-10 px-[36px] left-0 right-0 bg-[#f0f0f0] [#1e1e1e] [#fcf4f4]  lg:hidden z-[9999999]'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className='px-4 py-6 space-y-4'>
                {nav.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      className='block py-2 text-base font-medium hover:text-gray-600 transition-colors'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className='pt-4'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: nav.length * 0.1 }}
                >
                  <GetTicketButton style='px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 border border-[] ' />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav></>
  )
}

export default NavBar