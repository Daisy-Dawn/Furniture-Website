import React from 'react'
import Clock from '../components/Clock'
import {image4} from '../assets'

const LimitedOffers = () => {
  return (
    <div className='grid items-center font-nunito lg:grid-cols-2 grid-cols-1 xl:px-[5rem] md:px-[2rem] px-[1rem] md:my-[4rem] lg:py-[2rem] xl:py-[4rem] py-[1rem]  gap-[3rem]  md:gap-[4rem] bg-lead'>
      <Clock />
      <div className=''>
      <img className='w-full h-full object-cover rounded-[10px]' src={image4} alt="" />
      </div>
    </div>
  )
}

export default LimitedOffers