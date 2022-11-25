import React from 'react'
import Image from 'next/image'
import MyPhoto from '../assets/justme.png'
import { SiLinkedin } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'
import { ImMap2 } from 'react-icons/im'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineExperiment } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { GiPlantRoots } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function CV() {
  return (
    <div className='bg-[#464082] h-screen text-gray-300 flex justify-center overflow-hidden'>
      <div className='absolute right-5 top-5 '>
        <Link href='/'>
          <AiOutlineCloseCircle className='closedico' />
        </Link>
      </div>
      <div className='flex-col items-center content-around divide-y-2 py-6  '>
        <div className='flex-col text-center font-extrabold '>
          <Image
            src={MyPhoto}
            alt='My photo'
            className='object-cover w-[10rem] h-[10rem] rounded-full mx-auto border-4 grayscale'
          />
          <h1 className='text-[2.2rem] '>Malik Boguslaw</h1>
          <p className='tracking-widest'>Junior Front-end Developer </p>
          <div className='grid grid-rows-3 grid-flow-col items-center mb-2'>
            <SiLinkedin className='contacticon' />
            <AiOutlineMail className='contacticon' />
            <ImMap2 className='contacticon' />
            <a href='tel:+www.linkedin.com/in/boguslaw-malik-824691129'>
              My Linkedin Profile
            </a>
            <a href='mailto:bogdanmalik@gmail.com'> bogdanmalik@gmail</a>
            <p>Krakow, Poland</p>
          </div>
        </div>

        <div className='grid grid-rows-2 grid-flow-col gap-12 md:gap-8 lg:gap-6 justify-around h-1/2 py-4 text-center font-semibold'>
          <div>
            <Link href='./Skills'>
              <GiPlantRoots className='reacticon' />
              <p>Skills</p>
            </Link>
          </div>
          <div>
            <Link href='./Passions'>
              <AiOutlineHeart className='reacticon' />
              <p>Passions</p>
            </Link>
          </div>

          <div>
            <Link href='./Experience'>
              <AiOutlineExperiment className='reacticon' />
              <p>Experience</p>
            </Link>
          </div>
          <div>
            <Link href='https://github.com/BoodziooPL'>
              <AiFillGithub className='reacticon' />
              <p>Github</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
