'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SponsorCTA = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="">
        <motion.div 
          className=" p-4 md:p-12 text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Become a Sponsor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Join us in empowering the developer community. Amplify your brand, connect with top talent, and be part of innovation.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with DevFest Abeokuta 2025 and make a lasting impact on the tech ecosystem.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/sponsor"
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
            >
              View Sponsorship 
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorCTA
