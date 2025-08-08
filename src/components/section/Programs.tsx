import React from 'react'
import Image from 'next/image'

import StripImage from '../../../public/img/Group 141.png'
import TrainerCard from '../TrainerCard'

import Trainer1 from '../../../public/img/image 9.png'
import Trainer2 from '../../../public/img/image 11.png'
import Trainer3 from '../../../public/img/image 10.png'
import NextIcon from "../../../public/img/next.svg"

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

const videos = [
    {
        id: 1,
        title: 'Workout at Home',
        amount: 15
    },
    {
        id: 2,
        title: 'Stay Strong and Fit',
        amount: 48
    },
    {
        id: 3,
        title: 'High Intensity',
        amount: 25
    },
    {
        id: 4,
        title: 'Simple Workout',
        amount: 35
    },
    {
        id: 5,
        title: 'Burn Calories',
        amount: 35
    },
]

const Programs: React.FC = () => {
  return (
    <>
        <div className='flex justify-between w-full mt-52'>
            <h1 className='text-9xl whitespace-pre-line font-bold z-1'>
                Workout {'\n'}Program {'\n'} Made {'\n'} For You
            </h1>
            <div className='w-3/4 ml-32 -mt-26 bg-white/10 h-180 absolute right-0 pl-82 pt-36'>
                <p className='whitespace-pre-line mb-8 text-[25px] text-sm/loose'>
                    Lorem ipsum dolor sit amet, consectetur {'\n'}
                    adipiscing elit, sed do eiusmod tempor {'\n'} 
                    incididunt ut labore et dolore magna {'\n'}
                    aliqua consectetur adipiscing.
                </p>
                <button className='cursor-pointer w-max px-5 py-3 rounded-md mr-4 bg-[#25AB75] font-semibold'>
                    Get Started
                </button>
            </div>
        </div>
        <div>
           <Image src={StripImage} alt="strip" className='-mt-34 z-0'/>
        </div>
        <div className='flex'>
            <TrainerCard item={trainers[0]}/>
            <TrainerCard className='mt-80' item={trainers[1]}/>
            <TrainerCard className='-mt-48 z-1' item={trainers[2]}/>
        </div>
        <div className='mt-12 mb-32 w-full'>
            {
                videos.map((video, index) => (
                    <div 
                        key={index} 
                        className={`flex w-full ${video.id !== 5 ? 'border-b border-[#D8D8D8]': ''}  items-center justify-between py-8 cursor-pointer`}
                    >
                        <p>{video.id}</p>
                            <div className='text-left w-lg'>
                                <h2 className='text-5xl'>{video.title}</h2>
                                <p className='text-white/50'>{video.amount} videos</p>
                            </div>
                        <Image src={NextIcon} alt="next"/>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Programs