import React from 'react'
import Image from 'next/image'
import Sport from '../assets/balls-sports.png'
import Racing from '../assets/racing-car.png'
import Crypto from '../assets/cryptocurrencies.png'
import Traveling from '../assets/travelling.png'
import Code from '../assets/it.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Passions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='bg-[#464082] flex-col w-full min-h-screen lg:flex lg:flex-row lg:items-center lg:px-4 text-center lg:divide-x-2 text-gray-300  '>
        <div className='md:w-[80%] py-2 space-y-2'>
          <Image src={Sport} alt='sport icons' className='reacticon' />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur ipsa debitis cumque perferendis consequuntur
            reprehenderit saepe aliquid, commodi suscipit in, quo natus
            adipisci. Unde enim ea laboriosam maiores voluptate.
          </p>
        </div>

        <div className='md:w-[80%] py-2 space-y-2'>
          <Image src={Racing} alt='Racing car icons' className='reacticon' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur ipsa debitis cumque perferendis consequuntur
            reprehenderit saepe aliquid, commodi suscipit in, quo natus
            adipisci. Unde enim ea laboriosam maiores voluptate.
          </p>
        </div>
        <div className='md:w-[80%] py-4 space-y-2'>
          <Image src={Code} alt='code in screen icons' className='reacticon' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur ipsa debitis cumque perferendis consequuntur
            reprehenderit saepe aliquid, commodi suscipit in, quo natus
            adipisci. Unde enim ea laboriosam maiores voluptate.
          </p>
        </div>
        <div className='md:w-[80%] py-2 space-y-2'>
          <Image src={Traveling} alt='Travelling icons' className='reacticon' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur ipsa debitis cumque perferendis consequuntur
            reprehenderit saepe aliquid, commodi suscipit in, quo natus
            adipisci. Unde enim ea laboriosam maiores voluptate.
          </p>
        </div>
        <div className='md:w-[80%] py-2 space-y-2'>
          <Image
            src={Crypto}
            alt='cryptocurrency icons'
            className='reacticon'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur ipsa debitis cumque perferendis consequuntur
            reprehenderit saepe aliquid, commodi suscipit in, quo natus
            adipisci. Unde enim ea laboriosam maiores voluptate.
          </p>
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
