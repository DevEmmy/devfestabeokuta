'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EventShowcase from './EventShowcase'
import Image from 'next/image'

const Agenda = () => {
  const categories = ['Keynotes', 'Workshops', 'Panels', 'Networking']

  return (
    <section id="agenda" className="bg-[#ffe7a5]  ">
      <div className="general-space mx-auto  bg-[#FCF4F4] ">
        <div className='flex  items-center justify-between gap-3 pt-20 pb-5'>
          <p
            className='text-4xl sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center'
          >
            Agenda of the last event
          </p>

          


          <Image
            src='frame.png'
            unoptimized
            alt='banner'
            width={100}
            height={1000}
            className='h-72'
          />
        </div>



        <motion.div

          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">Agenda</h2> */}
          {/* <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay tuned for the full schedule of talks, workshops, and activities.
          </p> */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className="px-4 py-2 rounded-full border-2 border-black bg-white text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>


        <EventShowcase />

        {/* <div className="bg-white rounded-2xl border-2 border-black p-8 md:p-12 text-center shadow-lg">
          <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full border-2 border-black">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="text-3xl font-bold mb-3">Coming soon</h3>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            We’re finalizing an exciting lineup. Check back shortly for the detailed timetable.
          </p>

          
        </div> */}


      </div>

    </section>
  )
}

export default Agenda
