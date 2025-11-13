'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#1e1e1e] text-white  relative'>
      <Image
        src='/./divider.svg'
        alt='banner'
        width={1000}
        height={1000}
        className='w-full border-y-6 border-[#34A853] mb-16 md:mb-20'
        unoptimized
      />
      <div className='general-space pt-14 pb-14 '>
        {/* Main Footer Content */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Section */}
          <div className='sm:col-span-2 lg:col-span-2 flex flex-col gap-3' >
            <motion.div
              className='mb-3 sm:mb-4 '
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/./DevFest.png'
                alt='DevFest Logo'
                width={150}
                height={60}
                className='h-10 sm:h-12 w-auto'
                unoptimized
              />
            </motion.div>
            <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>Abeokuta '25</h3>
            <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 max-w-md'>
              Join us on December 6th, 2025 for the biggest tech event in Abeokuta.
              Learn, network, and grow with the developer community.
            </p>
            <p className='text-xs sm:text-sm text-gray-400'>
              June 12 Event Center, Kuto, Abeokuta.
            </p>
          </div>

          <div className=' col-span-2 grid grid-cols-2 md:ml-26'>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>Quick Links</h4>
              <ul className='space-y-1 sm:space-y-2'>
                {['agenda', 'speakers', 'sponsors', 'tickets', 'contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <Link href={`#${link}`} className='text-sm sm:text-base text-gray-300 hover:text-white transition-colors'>
                      {link === 'agenda' ? 'Agenda' : link === 'speakers' ? 'Speakers' : link === 'sponsors' ? 'Sponsors' : link === 'tickets' ? 'Get Tickets' : 'Contact Us'}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>Resources</h4>
              <ul className='space-y-1 sm:space-y-2'>
                {['apply-speak', 'apply-sponsor', 'code-conduct', 'faq', 'community'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <Link href={`#${link}`} className='text-sm sm:text-base text-gray-300 hover:text-white transition-colors'>
                      {link === 'apply-speak' ? 'Apply to Speak' : link === 'apply-sponsor' ? 'Become a Sponsor' : link === 'code-conduct' ? 'Code of Conduct' : link === 'faq' ? 'FAQ' : 'Join Community'}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className='border-t border-gray-700 pt-6 sm:pt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className='text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center'>Connect With Us</h4>
          <div className='flex items-center justify-center gap-3 sm:gap-4'>
            {[
              { Icon: FaTwitter, href: 'https://twitter.com/devfestabeokuta', label: 'Twitter' },
              { Icon: FaInstagram, href: 'https://www.instagram.com/devfestabeokuta/', label: 'Instagram' },
              { Icon: FaFacebook, href: 'https://www.facebook.com/devfestabeokuta/', label: 'Facebook' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/devfestabeokuta/', label: 'LinkedIn' }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-full p-2 flex items-center justify-center sm:p-3 transition-all duration-300'
                  aria-label={social.label}
                >
                  <social.Icon className='w-5 h-5 sm:w-6 sm:h-6' />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className='border-t border-gray-700 pt-6 sm:pt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4'>
            <p className='text-gray-400 text-xs sm:text-sm text-center sm:text-left'>
              © {currentYear} DevFest Abeokuta. All Rights Reserved.
            </p>

          </div>
        </motion.div>
      </div>
      {/* <Image
        src='/./divider.svg'
        alt='banner'
        width={1000}
        height={1000}
        className='w-full rotate-180'
        unoptimized
      /> */}
    </footer>
  )
}

export default Footer

