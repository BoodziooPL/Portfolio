import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Photo from '../assets/1.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function aboutme() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[#464082] w-full min-h-screen flex-col lg:flex lg:flex-row lg:justify-around lg:items-center text-center content-around'>
      <div>
        <Image
          src={Photo}
          alt='My photo'
          className='object-cover w-[15rem] h-[15rem] rounded-full mx-auto border-4 grayscale lg:w-[25rem] lg:h-[25rem] lg:rounded-none'
        />
      </div>
      <div className='lg:w-[50%] text-gray-300 space-y-4 px-12 '>
        <h1 className='text-4xl font-bold'>Few words about me.</h1>
        <p>
          Hi, my name is Boguslaw, my story with programming, started over 10
          years ago in middle school, when friend show me the first code of php
          and html. From this time, at every lesson information technology, we
          created something, just for fun. I remember, even HTML template at
          this time was created using table. After done High school, i started
          selling diffrent thing on Allegro.pl in dropshipping system. At the
          time, Allegro allows users to use their own template, so i decided
          create my own.After couples of days with google im done my first
          template, and later another one and another... Since that time, I
          gained more motivation to develop projects, and learning more about
          programming. I'm done couple diffrent courses on udemy. CS50 shared
          from harvard, and simple like SoloLearn on mobilephone. I want to take
          a step forward and have a chance improve my skills. My main area where
          i want develop is a frontend of online stores or blockchain.
        </p>
      </div>
      <div className='absolute right-5 top-3 '>
        <Link href='/'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </motion.div>
  )
}
