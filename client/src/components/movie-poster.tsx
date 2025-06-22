'use client'

import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const MoviePoster = () => {

  const router = useRouter();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/assets/background-image.png")] bg-cover bg-center h-screen'>
      <Image src="/assets/marvel-logo.svg" alt="Studio Logo" width={200} height={200} className="max-h-11 lg:h-11 mt-20" />
      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br/> of the Galaxy</h1>
      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5' /> 2018
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5' /> 2h 8m
        </div>
      </div>

      <p className='max-w-md text-gray-300' >A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
      <button onClick={() => router.push('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRightIcon className='w-5 h-5' />
      </button>
    </div>
  )
}

export default MoviePoster