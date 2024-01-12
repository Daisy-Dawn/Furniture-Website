import React from 'react'

const RecentlyViewed = ({image, name, price}) => {
  return (
    <div className='flex cursor-pointer flex-col md:flex-row lg:flex-col xl:flex-row items-center mb-[1rem] gap-[1rem]'>
        <div className='w-[70px] h-[70px] flex justify-center items-center   '>
            <img className='w-full h-full object-cover rounded-[10px]' src={image} alt="" />
        </div>

        <div className='flex flex-wrap flex-col'>
            <h2 className='text-lead text-[13px] lg:text-center xl:text-left lg:text-[17px] font-semibold'> {name} </h2>
            <p className='font-bold text-brown lg:text-center xl:text-left text-[13px] lg:text-[17px]'> {price} </p>
        </div>

    </div>
  )
}

export default RecentlyViewed