'use client'

import React, { useState } from 'react'
import GetTicketButton from '../ui/GetTicketButton'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu2Line } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'

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
    }
  ]

  return (
    <motion.nav 
      className='flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 sm:py-5 bg-white/20 backdrop-blur-sm fixed top-0 left-0 right-0 z-50'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image 
          src='/./devfest-abklogo.png' 
          alt='logo' 
          width={1000} 
          height={1000} 
          className='w-[120px] sm:w-[150px]' 
        />
      </motion.div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex gap-6 xl:gap-10 items-center'>
        {nav.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
          <GetTicketButton />
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors'
        aria-label='Toggle menu'
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <RiMenu2Line size={26} />
        </motion.div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className='absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 lg:hidden'
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
                <GetTicketButton />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar