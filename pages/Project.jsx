import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import PrOne from '../assets/pr1.png'
import PrTwo from '../assets/pr2.png'
import PrThree from '../assets/pr3.png'
import PrFour from '../assets/pr4.png'

export default function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[#464082] min-h-screen flex justify-center'>
      <div className='flex-col pt-12  space-y-12 text-center '>
        <div className='flex justify-center relative'>
          <Image
            src={PrOne}
            alt='screen simple News Website created from frontend mentor task'
            className='PrIMG'
          />
          <div className='flex bg-gray-900 absolute w-full h-full bg-opacity-95 font-semibold items-end justify-center rounded-md '>
            <div className='flex flex-col h-full justify-around text-gray-300 items-center'>
              <div className='w-[80%]'>
                <p>
                  Weather app, created with course from udemy.com. In this
                  project i learned a lot about working with API. After this, i
                  created more app with data from API. (eg. Cryptocurrency
                  tracker).
                </p>
              </div>
              <div>
                <p>Used Technology:</p>
                <div className='flex items-center'>
                  <AiFillHtml5 className='smReactIcon' />
                  <DiCss3 className='smReactIcon' />
                  <IoLogoJavascript className='smReactIcon' />
                </div>
              </div>
              <div className='flex w-[50%] justify-around'>
                <Link href='https://github.com/BoodziooPL/AppWeather'>
                  <AiFillGithub className='reacticon' />
                </Link>
                <Link href='https://ephemeral-platypus-d877b5.netlify.app/'>
                  <AiOutlineLink className='reacticon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center relative'>
          <Image
            src={PrTwo}
            alt='screen simple News Website created from frontend mentor task'
            className='PrIMG'
          />
          <div className='flex bg-gray-900 absolute w-full h-full bg-opacity-90 font-semibold items-end justify-center rounded-md '>
            <div className='flex flex-col h-full justify-around text-gray-300 items-center'>
              <div className='w-[80%]'>
                <p>
                  In this project i use API from rapidapi.com. This website
                  generate random quotes famous people. To developed it i used a
                  React and Tailwind
                </p>
              </div>
              <div>
                <p>Used Technology:</p>
                <div className='flex items-center'>
                  <DiReact className='smReactIcon' />
                  <SiTailwindcss className='smReactIcon' />
                  <IoLogoJavascript className='smReactIcon' />
                </div>
              </div>

              <div className='flex w-[50%] justify-around'>
                <Link href='https://github.com/BoodziooPL/React-Quotes-Generator'>
                  <AiFillGithub className='reacticon' />
                </Link>
                <Link href='https://heroic-raindrop-5f7208.netlify.app/'>
                  <AiOutlineLink className='reacticon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center relative'>
          <Image
            src={PrThree}
            alt='screen simple News Website created from frontend mentor task'
            className='PrIMG'
          />
          <div className='flex bg-gray-900 absolute w-full h-full bg-opacity-95 font-semibold items-end justify-center rounded-md '>
            <div className='flex flex-col h-full justify-around text-gray-300 items-center'>
              <div className='w-[80%]'>
                <p>
                  My first project in NextJS and TailwindCSS. To create it i
                  inspired theme: <quote>NFT Card</quote> from frontend mentor
                  website.
                </p>
              </div>
              <div>
                <p>Used Technology:</p>
                <div className='flex items-center'>
                  <TbBrandNextjs className='smReactIcon' />
                  <SiTailwindcss className='smReactIcon' />
                  <IoLogoJavascript className='smReactIcon' />
                </div>
              </div>

              <div className='flex w-[50%] justify-around'>
                <Link href='https://github.com/BoodziooPL/NFT-Card-NextJS'>
                  <AiFillGithub className='reacticon' />
                </Link>
                <Link href='https://chipper-peony-f8588b.netlify.app/'>
                  <AiOutlineLink className='reacticon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center relative'>
          <Image
            src={PrFour}
            alt='screen simple News Website created from frontend mentor task'
            className='PrIMG'
          />
          <div className='flex bg-gray-900 absolute w-full h-full bg-opacity-95 font-semibold items-end justify-center rounded-md '>
            <div className='flex flex-col h-full justify-around text-gray-300 items-center'>
              <div className='w-[80%]'>
                <p>
                  Simple News Home page. Coded only for 375 and 1440 Displays.
                  Layout comes from frontendmentor website. Like i said, coded
                  only for two displays (like in task). This is my first project
                  coded from this website.
                </p>
              </div>
              <div>
                <p>Used Technology:</p>
                <div className='flex items-center'>
                  <AiFillHtml5 className='smReactIcon' />
                  <DiCss3 className='smReactIcon' />
                  <IoLogoJavascript className='smReactIcon' />
                </div>
              </div>

              <div className='flex w-[50%] justify-around'>
                <Link href='https://github.com/BoodziooPL/News-homepage'>
                  <AiFillGithub className='reacticon' />
                </Link>
                <Link href='https://stellar-starburst-da586c.netlify.app/'>
                  <AiOutlineLink className='reacticon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-5 top-3 '>
        <Link href='/'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </motion.div>
  )
}
