import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-[#464082] flex-col text-gray-300 min-h-screen items-center justify-center   lg:flex lg:flex-row lg:divide-x-2 text-center '>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col
          justify-between items-center'>
          <div>
            <span className='font-extrabold text-2xl'>
              Chrome Extension ToDoApp
            </span>
            <div className='flex items-center justify-center py-4'>
              <Link href='https://github.com/BoodziooPL/ChromeExtensionTodo'>
                <AiFillGithub className='smReactIcon' />
              </Link>
              <Link href='https://github.com/BoodziooPL/ChromeExtensionTodo'>
                <AiOutlineLink className='smReactIcon' />
              </Link>
            </div>
          </div>
          <div className='md:w-[80%]'>
            <p>
              Simple project created using HTML/CSS/JS/LocalStorage in Chrome.
              This project learned me a lot about saving things in LocalStorage,
              and working with arrays in JS. I also learned something more about
              working with chrome extension, and setting up JSON files for this.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col justify-between  items-center'>
          <div>
            <span className='font-extrabold text-2xl'>
              CryptoCurrency Tracker
            </span>
            <div className='flex items-center justify-center py-4'>
              <Link href='https://github.com/BoodziooPL/ChromeExtensionTodo'>
                <AiFillGithub className='smReactIcon' />
              </Link>
              <Link href='https://heartfelt-marshmallow-00a3b1.netlify.app/'>
                <AiOutlineLink className='smReactIcon' />
              </Link>
            </div>
          </div>

          <div className='md:w-[80%]'>
            <p>
              Application for price tracking cryptocurrency. In this project, i
              learned a lot about work with API. (im use here free api from
              rapidapi.com). Also in working on this project i geted more
              experience about searching phrase in website. But the important
              things to learn here for me was a working with API.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='w-[100%] h-[33%] lg:h-[50%] xl:h-[40%] flex flex-col justify-between  items-center'>
          <div>
            <span className='font-extrabold text-2xl'>Clock Alarm App</span>
            <div className='flex items-center justify-center py-4'>
              <Link href='https://github.com/BoodziooPL/ChromeExtensionTodo'>
                <AiFillGithub className='smReactIcon' />
              </Link>
              <Link href='https://astonishing-concha-3ebf3e.netlify.app/'>
                <AiOutlineLink className='smReactIcon' />
              </Link>
            </div>
          </div>

          <div className='md:w-[50%]'>
            <p>
              App created for me and for fun. Created because sometimes i had a
              problem with wake up :) So i decided having a own wake up clock.
              To create logic i used a Vanilla JS and that is it...
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
