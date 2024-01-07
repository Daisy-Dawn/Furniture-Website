import React from 'react'
import { highlight2 } from '../assets'
import Button from '../components/Button'

const Highlight2 = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-start xl:mx-[5rem] md:mx-[2rem] mx-[1rem] lg:py-[4rem] py-[0rem] xl:gap-[4rem] md:gap-[2rem] gap-[0.5rem]'>
      <div className='lg:col-span-2  '>
        <img className='rounded-[10px] w-full h-full object-cover' src={highlight2} alt="" />
      </div>

      <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
        <h2 className='text-lead font-bold text-[25px] capitalize text-center md:text-left'>Match Furniture Styles</h2>
        <p className='lg:my-[2rem] my-[1rem] text-bGrey text-[18px] text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        <div className='w-1/2 md:w-full mt-2 md:mt-0'>
          <Button text="Shop Now" />
        </div>
      </div>

    </div>
  )
}

export default Highlight2