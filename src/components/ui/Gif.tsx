'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Gif = () => {
  return (
    <motion.div 
      className='w-full bg-[#f0f0f0] py-20 general-space'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src='/./gif.gif' 
            alt='DevFest animation' 
            width={1000} 
            height={1000} 
            className='w-full h-full object-contain mx-auto' 
            unoptimized
          />
        </motion.div>
    </motion.div>
  )
}

export default Gif