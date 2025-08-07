import React from 'react'

interface buttonInterface {
    text: string;
}

const Button: React.FC<buttonInterface> = ({text}) => {
  return (
    <button className='w-max px-2 py-1 rounded-md bg-red-600'>
        {text}
    </button>
  )
}

export default Button