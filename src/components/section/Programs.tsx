import React from 'react'
import Image from 'next/image'

import StripImage from '../../../public/img/Group 141.png'
import TrainerCard from '../TrainerCard'

import Trainer1 from '../../../public/img/image 9.png'
import Trainer2 from '../../../public/img/image 11.png'
import Trainer3 from '../../../public/img/image 10.png'

const trainers = [
    {
        name: 'Samantha William',
        image: Trainer1
    },
    {
        name: 'Karen Summer',
        image: Trainer2
    },
    {
        name: 'Jonathan Wise',
        image: Trainer3
    },
]

const Programs: React.FC = () => {
  return (
    <>
        <div className='flex justify-between w-full mt-52'>
            <h1 className='text-9xl whitespace-pre-line font-bold z-1'>
                Workout {'\n'}Program {'\n'} Made {'\n'} For You
            </h1>
            <div className='w-full ml-32'>
                <p className='whitespace-pre-line mb-8'>
                    Lorem ipsum dolor sit amet, consectetur {'\n'}
                    adipiscing elit, sed do eiusmod tempor {'\n'} 
                    incididunt ut labore et dolore magna {'\n'}
                    aliqua consectetur adipiscing.
                </p>
                <button className='w-max px-5 py-3 rounded-md mr-4 bg-green-500 font-semibold'>
                    Get Started
                </button>
            </div>
        </div>
        <div>
            <div className='bg-white/10 -mt-162 w-3/4 h-180 absolute right-0'></div>
            <Image src={StripImage} alt="strip" className='-mt-34 z-0'/>
        </div>
        <div className='flex'>
            <TrainerCard item={trainers[0]}/>
            <TrainerCard className='mt-80' item={trainers[1]}/>
            <TrainerCard className='-mt-48 z-1' item={trainers[2]}/>
        </div>
    </>
  )
}

export default Programs