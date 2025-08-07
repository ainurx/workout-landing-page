import React from 'react'
import Image from 'next/image'

import HeroImage from '../../../public/img/image 1.png'
import Button from '../Button'


function Hero() {
  return (
    <div className='flex'>
        <div>

            <div className='flex bg-white/10 w-max pl-1 pr-4 py-1 rounded-2xl'>
                <p className='bg-green-600 px-2 rounded-3xl mr-3'>NEW</p>
                <p>High Intensity workout to burn calories</p>
            </div>
            <h2 className='text-9xl whitespace-pre-line font-bold my-4'>
                Cardio {'\n'}
                Exercise
            </h2>
            <p className='whitespace-pre-line text-white/50 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do {'\n'}
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='w-max px-5 py-3 rounded-md mr-4 bg-green-500 font-semibold'>
                Get Started
            </button>
            <button className='w-max px-5 py-3 rounded-md bg-white/10 font-semibold'>
                Preview
            </button>
        </div>
        <Image src={HeroImage} width={640} alt={'hero'}/>
        <div>
            <div className='bg-white/10 p-4 rounded-2xl'>
                <h3 className='text-4xl text-yellow-300'>38:14</h3>
                <p>TIME</p>
            </div>
            <div className='bg-white/10 p-4 rounded-2xl mt-4'>
                <h3 className='text-4xl text-red-500'>165</h3>
                <p>EST CALORIES</p>
            </div>
        </div>
    </div>
  )
}

export default Hero