import React from 'react'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const handlerClick = () => {
  console.log(object)
}
export default function Timeline() {
  return (
    <div className='bg-[#464082] min-h-screen w-full flex justify-center items-center'>
      <div class='max-w-7xl mx-auto w-full grid grid-cols-9 px-2'>
        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2004</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>First PC</p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>

        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>2014</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>

        <div class='col-span-4 w-full h-full '>
          <div class='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
            <h1 class='text-white text-xl font-medium py-2'>Futured</h1>
            <p class='text-gray-100 sm:text-sm text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
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
    </div>
  )
}
