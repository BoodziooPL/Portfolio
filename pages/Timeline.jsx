import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RedPin from '../assets/pinred.png'
import YellowPin from '../assets/pinyellow.png'
import { ImArrowRight } from 'react-icons/im'
import FirstInfo from '../components/FirstInfo'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const handlerClick = () => {
  console.log(object)
}
export default function Timeline() {
  return (
    <div className='bg-[#464082] min-h-screen'>
      <div className='w-full h-full'>
        <h1>TimeLine:</h1>
        <div className='insert'></div>
        <div className='bg-gray-400 h-[1px] flex items-center justify-around mt-96'>
          <p>2004</p>
          <div
            className='bg-gray-300 h-2 w-2 rounded-full '
            onClick={handlerClick}></div>
          <p>2004</p>
          <div className='bg-gray-300 h-2 w-2 rounded-full'></div>
          <p>2004</p>
          <div className='bg-gray-300 h-2 w-2 rounded-full'></div>
          <p>2004</p>
          <div className='bg-gray-300 h-2 w-2 rounded-full'></div>
        </div>
      </div>

      <div className='absolute right-5 top-3 '>
        <Link href='/'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
    </div>
  )
}
