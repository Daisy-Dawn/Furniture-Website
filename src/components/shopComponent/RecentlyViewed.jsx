import React from 'react'

const RecentlyViewed = ({image, name, price}) => {
  return (
    <div className='flex items-center mb-[1rem] gap-[1rem]'>
        <div className='w-[70px] h-[70px] flex justify-center items-center   '>
            <img className='w-full h-full object-cover rounded-[10px]' src={image} alt="" />
        </div>

        <div className='flex  flex-col'>
            <h2 className='text-lead text-[17px] font-semibold'> {name} </h2>
            <p className='font-bold text-brown text-[17px]'> {price} </p>
        </div>

    </div>
  )
}

export default RecentlyViewed