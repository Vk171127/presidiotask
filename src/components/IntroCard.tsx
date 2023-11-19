import React from 'react'

const IntroCard = ({label}:any) => {
  return (
    <div className='h-[6rem] text-center align-middle px-4 py-5 w-[24rem] rounded-2xl p-2 text-white border-black bg-gray-600 bg-opacity-70 cursor-pointer ' >
        {label}
        
    </div>
  )
}

export default IntroCard