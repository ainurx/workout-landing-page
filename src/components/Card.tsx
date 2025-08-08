import React from 'react'

import Image, { StaticImageData } from 'next/image'

interface itemInterface {
    item: {
        title: string;
        image: StaticImageData;
        duration: string;
        cal: number;
    }
}

const Card: React.FC<itemInterface> = ({item}) => {
    const { title, image, duration, cal } = item
  return (
    <div className='w-full relative'>
        <Image src={image} className='w-full rounded-t-xl mask-b-from-30% mask-b-to-100%' alt={title}/>
        <div className='-mt-7 px-6'>
            <div className='flex justify-between'>
                <h2 className='text-5xl font-semibold'>{title}</h2>
                <p className='bg-black p-2 right-0 mt-2 rounded-tl-2xl absolute'>{duration}</p>
            </div>
            <p>{cal} est calories</p>
        </div>
    </div>
  )
}

export default Card