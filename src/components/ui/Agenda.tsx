'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EventShowcase from './EventShowcase'
import Image from 'next/image'
import TitleHead from './TitleHead'

const Agenda = () => {
  const categories = ['Keynotes', 'Workshops', 'Panels', 'Networking']

  return (
    <section id="agenda" className="bg-[#ffe7a5] relative  ">
      <div className="general-space mx-auto  bg-[#FCF4F4] ">


        <div className=' pt-20 '>
          <TitleHead />
        </div>




        <EventShowcase />


      </div>

    </section>
  )
}

export default Agenda
