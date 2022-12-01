import React from 'react'
import Image from 'next/image'
import JavaScript from '../assets/JavaScriptCert.jpg'
import FrontEnd from '../assets/FrontEndCert.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Certification() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='bg-[#464082] text-center min-h-screen text-gray-300 grid grid-cols-8 place-items-center'>
        <div className='col-span-8 w-full h-3/4 gap-2'>
          <Image
            src={JavaScript}
            alt='udemy certification javascript'
            className='certification'
          />
        </div>
        <div className='col-span-8 w-full h-3/4 items-center'>
          <Image
            src={FrontEnd}
            alt='udemy certification frontend'
            className='certification'
          />
        </div>
      </div>
      <div className='absolute right-5 top-3'>
        <Link href='/CvPage'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </motion.div>
  )
}
