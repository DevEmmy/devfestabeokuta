import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GetTicketButton = ({style}: {style?: string}) => {
  return (
    <Link href="https://gdg.community.dev/events/details/google-gdg-abeokuta-presents-devfest-abeokuta-2025-building-the-future-with-ai-and-cloud/cohost-gdg-abeokuta">
        <motion.button 
          className={`${style} bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-2 cursor-pointer text-sm sm:text-base`}
          whileHover={{ scale: 1.05, backgroundColor: "#374151", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <span>Get Ticket</span>
            <motion.div
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <MdArrowOutward />
            </motion.div>
        </motion.button>
    </Link>
  )
}

export default GetTicketButton