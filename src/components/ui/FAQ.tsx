'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is DevFest Abeokuta?",
      answer: "DevFest Abeokuta is a one-day developer festival that brings together developers, designers, and tech enthusiasts to learn, share knowledge, and network. It features talks, workshops, and panel discussions on the latest technologies and trends."
    },
    {
      question: "When and where is the event?",
      answer: "DevFest Abeokuta 2025 will take place on December 6th, 2025 at June 12 Event Center, Kuto, Abeokuta."
    },
    {
      question: "How much does it cost to attend?",
      answer: "Free for all attendees."
    },
    {
      question: "Who can attend DevFest Abeokuta?",
      answer: "DevFest Abeokuta is open to everyone! Whether you're a developer, designer, student, entrepreneur, or simply interested in technology, you're welcome to join us. We encourage participants of all skill levels."
    },
    {
      question: "Will sessions be recorded?",
      answer: "Yes, all main stage sessions will be recorded and made available to attendees after the event. Workshop recordings may vary based on the session type."
    },
    {
      question: "What should I bring to the event?",
      answer: "We recommend bringing a laptop for hands-on workshops, your ticket (digital or printed), a form of ID, and a positive attitude ready to learn and network!"
    },
    {
      question: "Is there parking available?",
      answer: "Yes, free parking is available at the venue. We recommend arriving early to secure a spot."
    },
    {
      question: "Can I become a speaker or volunteer?",
      answer: "Absolutely! We're always looking for passionate speakers and volunteers. Check out our 'Apply to Speak' and 'Become a Volunteer' sections in the navigation menu."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 lg:px-[20%] mx-auto px-4 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? We've got answers. Find everything you need to know about DevFest Abeokuta 2025.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border-2 border-black overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-black"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black pr-4">
                  {faq.question}
                </h3>
                <motion.svg
                  className="w-6 h-6 text-black flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5">
                      <p className="text-base text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:info@devfestabeokuta.com?subject=Question about DevFest Abeokuta"
            className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
