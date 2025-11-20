import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TicketDiscount } from 'iconsax-react'

const GetTicketButton = ({style, isIcon}: {style?: string, isIcon? : boolean}) => {
  return (
    <Link href="https://gdg.community.dev/events/details/google-gdg-abeokuta-presents-devfest-abeokuta-2025-building-the-future-with-ai-and-cloud/cohost-gdg-abeokuta">
        <motion.button 
          className={`${style ? style : 'px-6 sm:px-8 lg:px-10 py-3 sm:py-4'} bg-black inset-5 text-white rounded-full flex items-center gap-2 cursor-pointer text-sm lg:text-xl md:font-semibold sm:text-base`}
          // px-6 sm:px-8 lg:px-10 py-3 sm:py-4
          whileHover={{ scale: 1.05, backgroundColor: "#374151", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >

          {
            isIcon && <TicketDiscount size="28"  className="mr-2"  color="#FF8A65" />
          }
          
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