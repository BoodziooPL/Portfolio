import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { DiReact } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { FcLinux } from 'react-icons/fc'
// import { BsWordpress } from 'react-icons/bs'
// import { SiTypescript } from 'react-icons/si'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Star from '../assets/star.png'
import HalfStar from '../assets/rating.png'
import EmptyStar from '../assets/emptyStar.png'

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -300 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='h-screen grid grid-rows-4 md:grid-rows-3 md:gap-2 grid-flow-col gap-4 justify-around items-end content-center overflow-hidden bg-[#464082] pb-4 text-center font-semibold text-white'>
      <div>
        <AiFillHtml5 alt='html' className='reacticon text-orange-800' />
        <h2>HTML</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
        </div>
      </div>
      <div>
        <DiCss3 className='reacticon text-blue-700' />
        <h2>CSS</h2>
        <div className='flex justify-center star '>
          <Image src={Star} alt='Full Star icon' />
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
        </div>
      </div>
      <div>
        <IoLogoJavascript className='reacticon text-yellow-400' />
        <h2>Javascript</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
        </div>
      </div>
      <div>
        <DiReact className='reacticon text-blue-600' />
        <h2>React</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      <div>
        <TbBrandNextjs className='reacticon text-white' />
        <h2>NextJS</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      <div>
        <SiTailwindcss className='reacticon text-blue-700' />
        <h2>TailwindCSS</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={Star} alt='Full Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      <div>
        <AiFillGithub className='reacticon text-white ' />
        <h2>GitHub</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      <div>
        <FcLinux className='reacticon' />
        <h2>Linux</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={HalfStar} alt='Half Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      {/* <div>
        <BsWordpress className='reacticon  rounded-full' />
        <h2>Wordpress</h2>
        <div className='flex justify-center star'>
          <Image src={Star} alt='Full Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div>
      <div>
        <SiTypescript className='reacticon text-blue-500 bg-white rounded-lg' />
        <h2>TypeScript</h2>
        <div className='flex justify-center star'>
          <Image src={HalfStar} alt='Half Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
          <Image src={EmptyStar} alt='Empty Star icon' />
        </div>
      </div> */}
      <div className='absolute right-5 top-3 '>
        <Link href='/CvPage'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </motion.div>
  )
}
