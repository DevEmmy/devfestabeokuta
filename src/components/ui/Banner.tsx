"use client"
import React from 'react'
import GetTicketButton from './GetTicketButton'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const Banner = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const decorativeVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  }

  const decorativeVariants2: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4
      }
    }
  }

  return (
    <motion.div 
      className='flex relative flex-col items-center justify-center gap-4 sm:gap-5 h-[100vh] px-4 sm:px-6 lg:px-8'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div variants={imageVariants}>
          <Image 
            src='https://devfestilorin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanyard.d957882b.png&w=3840&q=75' 
            unoptimized 
            alt='banner' 
            width={1000} 
            height={1000} 
            className='h-[40px] sm:h-[50px] lg:h-[60px] w-auto' 
          />
        </motion.div>

        <motion.h1 
          className='text-4xl sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center'
          variants={itemVariants}
        >
          Devfest Abeokuta '25
        </motion.h1>
        
        <motion.p 
          className='text-sm sm:text-base lg:text-[18px] w-full sm:w-4/5 lg:w-2/3 text-center max-w-4xl'
          variants={itemVariants}
        >
          Devfest Abeokuta is a one-day event that brings together developers, designers, and entrepreneurs to learn, share, and grow together on December 6th, 2025.
        </motion.p>
        
        <motion.div 
          className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto'
          variants={itemVariants}
        >
            <GetTicketButton />

            <motion.button 
              className='bg-white border border-black text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto justify-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >    
                Apply to speak
            </motion.button>
        </motion.div>

        {/* Decorative Images - Hidden on mobile, visible on larger screens */}
        <motion.div 
          variants={decorativeVariants}
          className=''
        >
          <Image 
            src='/./hash.png' 
            alt='banner' 
            width={1000} 
            height={1000} 
            className='block absolute bottom-20 left-[0px] -translate-x-1/2 w-[300px] xl:w-[400px]' 
            unoptimized
          />
        </motion.div>

        <motion.div 
          variants={decorativeVariants2}
          className=''
        >
          <Image 
            src='/./s3.png' 
            alt='banner' 
            width={1000} 
            height={1000} 
            className=' absolute -bottom-[60px] -left-[30px] w-[300px] xl:w-[400px] z-10' 
            unoptimized
          />
        </motion.div>
    </motion.div>
  )
}

export default Banner