import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'

const GetTicketButton = ({style}: {style?: string}) => {
  return (
    <>
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
    </>
  )
}

export default GetTicketButton