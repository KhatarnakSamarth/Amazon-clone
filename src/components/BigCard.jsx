import React from 'react'

const BigCard = ({title}) => {
  return (
    <div className=" hover:-translate-y-1 z-1 flex flex-col gap-2 w-full justify-center sm:w-[47%] lg:w-1/4 p-4 bg-white rounded-xl">
        <h2 className='font-bold'>{title}</h2>
        <img src="https://picsum.photos/300/180" className='rounded w-full'/>
        <span className='font-bold text-[#007185] text-xs sm:text-sm hover:text-[#c45500] hover:underline inline '>See More</span>
    </div>
  )
}

export default BigCard