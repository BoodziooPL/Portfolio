import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cv from '../assets/cv.png'
import Face from '../assets/face-id.png'
import Project from '../assets/project.png'
import TimeLine from '../assets/timeline.png'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <motion.nav
        initial={{ y: -80, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='flex bg-slate-300 justify-between rounded-md absolute bottom-2 w-[90%] ml-auto mr-auto left-0 right-0 py-2 px-2 lg:w-[60%] overflow-hidden '>
        <Link href='/CvPage'>
          <Image src={Cv} alt='cv icon' />
        </Link>

        <Link href='/'>
          <Image src={Face} alt='face icon' />
        </Link>

        <Link href='/'>
          <Image src={Project} alt='project icon' />
        </Link>

        <Link href='/'>
          <Image src={TimeLine} alt='timeline icon' />
        </Link>
      </motion.nav>
    </motion.header>
  )
}
