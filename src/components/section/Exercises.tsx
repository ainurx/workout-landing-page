import React from 'react'

import EImage1 from '../../../public/img/image 4.png'
import EImage2 from '../../../public/img/image 7.png'
import EImage3 from '../../../public/img/image 2.png'
import EImage4 from '../../../public/img/image 12.png'
import EImage5 from '../../../public/img/image 6.png'
import EImage6 from '../../../public/img/image 3.png'
import Card from '../Card'

const items = [
    {
        title: 'Treadmill',
        image: EImage1,
        duration: '58:24',
        cal: 250,
    },
    {
        title: 'Stretching',
        image: EImage2,
        duration: '58:24',
        cal: 250,
    },
    {
        title: 'Yoga',
        image: EImage3,
        duration: '58:24',
        cal: 250,
    },
    {
        title: 'Running',
        image: EImage4,
        duration: '58:24',
        cal: 250,
    },
    {
        title: 'Lifting',
        image: EImage5,
        duration: '58:24',
        cal: 250,
    },
    {
        title: 'PushUp',
        image: EImage6,
        duration: '58:24',
        cal: 250,
    }
]

const Exercises: React.FC = () => {
  return (
    <div className='-mt-42 w-full'>
        <div className="flex justify-between w-full mb-8">
            <h3 className="text-2xl font-semibold">Popular Exercises</h3>
            <a className='text-white/50 text-[12px]'>SEE MORE EXERCISES</a>
        </div>
        <div className='grid grid-cols-3 gap-12 w-full'>
            {
                items.map((item,index)=> (
                    <Card key={index} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Exercises