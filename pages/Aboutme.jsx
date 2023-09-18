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
        <h1 className='text-4xl font-bold'>A Few words about me.</h1>
        <p>
          Hello,

I'm Boguslaw, and my journey in programming began over a decade ago during my middle school days. It all started when a friend introduced me to the world of PHP and HTML. In every computer science class thereafter, we would tinker with code and create things just for the fun of it. I still remember when HTML templates were built using tables!

After high school, I embarked on a journey of selling various goods on Allegro.pl using the dropshipping system. During this time, Allegro allowed users to use their own auction templates, which led me to create my own templates. With some diligent Googling, I crafted my first template, and from there, I continued to develop more. This experience fueled my motivation to undertake more projects and expand my programming knowledge.

Over the years, I completed several courses, including the renowned CS50 course offered by Harvard and simpler courses like SoloLearn on my mobile phone. Now, I'm ready to take the next step and further enhance my skills, particularly in the areas of cybersecurity administration and penetration testing.

Additionally, I'll be starting my studies in computer science this October, which I believe will contribute significantly to my professional growth in the field of cybersecurity.

I'm eager to bring my passion for security and expertise to your team and help enhance the company's cybersecurity measures.

Warm regards,
Boguslaw Malik
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
