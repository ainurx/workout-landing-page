import React from 'react'

import Image, { StaticImageData } from 'next/image'

interface trainerInterface {
  className?: string;
  item: {
    name: string;
    image: StaticImageData
  }
}

const TrainerCard: React.FC<trainerInterface> = ({className, item}) => {
  const { name, image } = item
  return (
    <div className={className}>
        <Image src={image} alt={name}/>
        <div className='p-8'>
          <h6 className='text-2xl'>{name}</h6>
          <p className='text-white/50'>Trainer</p>
        </div>
    </div>
  )
}

export default TrainerCard