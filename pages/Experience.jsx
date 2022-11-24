import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-[#464082] flex-col text-gray-300 min-h-screen items-center justify-center   lg:flex lg:flex-row lg:divide-x-2 text-center '>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col
          justify-between items-center'>
          <div>
            <span className='font-extrabold text-2xl'>
              Chrome Extension ToDoApp
            </span>
            <Link href='https://github.com/BoodziooPL/ChromeExtensionTodo'>
              <AiFillGithub className='smReactIcon' />
            </Link>
          </div>
          <div className='md:w-[80%]'>
            <p>
              Simple project created using HTML/CSS/JS/LocalStorage in Chrome.
              This project learned me a lot about saving things in LocalStorage,
              and working with arrays in JS. I'm also learned something more
              about working with chrome extension, and setting up JSON files for
              this.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col justify-between  items-center'>
          <div>
            <span className='font-extrabold text-2xl'>
              CryptoCurrency Tracker
            </span>
            <Link href='https://github.com/BoodziooPL/cryptoTracker'>
              <AiFillGithub className='smReactIcon' />
            </Link>
          </div>

          <div className='md:w-[80%]'>
            <p>
              Application for price tracking cryptocurrency. In this project,
              i'm learned a lot about work with API. (im use here free api from
              rapidapi.com). Also in working on this project i geted more
              experience about searching phrase in website. But the important
              things to learn here for me was a working with API.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col justify-between  items-center'>
          <div>
            <span className='font-extrabold text-2xl'>Clock Alarm App</span>
            <Link href='https://github.com/BoodziooPL/Clock_Alarm_App'>
              <AiFillGithub className='smReactIcon' />
            </Link>
          </div>

          <div className='md:w-[50%]'>
            <p>
              App created for me and for fun. Created because sometimes i had a
              problem with wake up :) So i decided having a own wake up clock.
              To create logic i used a Vanilla JS and that's it...
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className='absolute right-5 top-7 '>
        <Link href='./CvPage'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </>
  )
}
