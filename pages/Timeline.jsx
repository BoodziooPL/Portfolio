import React from 'react'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[#464082] min-h-screen w-full flex justify-center
      items-center'>
      <div class='max-w-7xl mx-auto w-full grid grid-cols-9 px-2'>
        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2004</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              My first PC, where im starting my story with IT. At this time very
              popular source of knowledge was magazines like "PC Format",
              "Niezbednik" or "Komputer Swiat". It was a great time testing and
              having fun with trying every programs and toutorials from this
              magazines. Later I installed my first Linux Ubuntu 8.04 from the
              disc that comes with the magazine.
            </p>
          </div>
        </div>
        <div class='relative col-span-1 w-full h-full flex justify-center items-center'>
          <div class='h-full w-1 bg-indigo-300'></div>
          <div class='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>
            1
          </div>
        </div>
        <div class='col-span-4 w-full h-full'></div>

        <div class='col-span-4 w-full h-full'></div>
        <div class='relative col-span-1 w-full h-full flex justify-center items-center'>
          <div class='h-full w-1 bg-indigo-300'></div>
          <div class='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>
            2
          </div>
        </div>
        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2010</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              In the middle school i met with my first code. With friend on the
              IT lessons, we creating simple templates in HTML and CSS. We
              trying too use some PHP. With ideas from MPCforum we set up first
              server on Hamachi of popular game.
            </p>
          </div>
        </div>

        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2014</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              I started creating first HTML/CSS templates on allegro.pl for my
              sellings auction. At this times i used a lot information from
              google, and youtube tutorials.
            </p>
          </div>
        </div>
        <div class='relative col-span-1 w-full h-full flex justify-center items-center'>
          <div class='h-full w-1 bg-indigo-300'></div>
          <div class='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>
            3
          </div>
        </div>
        <div class='col-span-4 w-full h-full'></div>

        <div class='col-span-4 w-full h-full'></div>
        <div class='relative col-span-1 w-full h-full flex justify-center items-center'>
          <div class='h-full w-1 bg-indigo-300'></div>
          <div class='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>
            4
          </div>
        </div>
        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2020</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              I Started learning on Udemy.com with courses "samuraj
              programowania" and others sources on youtube. I focused on getting
              more knowledge Javascript, CSS and RWD.
            </p>
          </div>
        </div>

        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>Futured</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              My main goal is skill in creating themes for
              Wordpress(woocommerce) / Shopify / Prestashop. I planning to also
              learn more about backend, security and blockchain.
            </p>
          </div>
        </div>
        <div class='relative col-span-1 w-full h-full flex justify-center items-center'>
          <div class='h-full w-1 bg-indigo-300'></div>
          <div class='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>
            5
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
