'use client'

import React, { useState, useEffect } from 'react'
import GetTicketButton from './GetTicketButton'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const [videoLoaded, setVideoLoaded] = useState(true)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Event date: December 6, 2025
    const eventDate = new Date('2025-12-06T08:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className='flex flex-col items-center h-[90vh] z-20 relative justify-center gap-6 sm:gap-8 py-16 sm:py-20 px-4 overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload='metadata'
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
        className={`absolute inset-0 w-full h-full object-cover z-[-2] transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src='/./DevFest.mp4' type='video/mp4' />
      </video>
      
      {/* Fallback background while video loads */}
      {!videoLoaded && !videoError && (
        <div className='absolute inset-0  z-[-2]'></div>
      )}
      
      {/* Error fallback */}
      {videoError && (
        <div className='absolute inset-0 z-[-2]'></div>
      )}
      
      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black/50 z-[-1]'></div>
      
      <motion.h2 
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white px-4'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Count Every Second Until the Event
      </motion.h2>
      
      <div className='grid grid-cols-2 lg:flex gap-3 sm:gap-4 md:gap-6 w-full max-w-4xl'>
        {/* Days */}
        <motion.div 
          className='bg-white/80 backdrop-blur-sm border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg flex-1'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2'
            key={timeLeft.days}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeLeft.days}
          </motion.div>
          <div className='text-xs sm:text-sm md:text-base font-semibold'>Days</div>
        </motion.div>

        {/* Hours */}
        <motion.div 
          className='bg-white/80 backdrop-blur-sm border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg flex-1'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2'
            key={timeLeft.hours}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeLeft.hours}
          </motion.div>
          <div className='text-xs sm:text-sm md:text-base font-semibold'>Hours</div>
        </motion.div>

        {/* Minutes */}
        <motion.div 
          className='bg-white/80 backdrop-blur-sm border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg flex-1'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2'
            key={timeLeft.minutes}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeLeft.minutes}
          </motion.div>
          <div className='text-xs sm:text-sm md:text-base font-semibold'>Minutes</div>
        </motion.div>

        {/* Seconds */}
        <motion.div 
          className='bg-white/80 backdrop-blur-sm border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg flex-1'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2'
            key={timeLeft.seconds}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeLeft.seconds}
          </motion.div>
          <div className='text-xs sm:text-sm md:text-base font-semibold'>Seconds</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <GetTicketButton style='border-2 border-white ' />
      </motion.div>
    </motion.div>
  )
}

export default CountdownTimer

