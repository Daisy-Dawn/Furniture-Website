import React from 'react'
import { sofa } from '../assets'
import Button from '../components/Button'

const MatchStyles = () => {
  return (
    <div className='grid grid-cols-2 items-center mx-[5rem] my-[4rem] bg-lynx p-[3rem]   gap-[4rem] '>
      <div className='  '>
      <h2 className='text-lead font-bold text-[25px] capitalize'>Stylish minimal chair</h2>
        <p className='my-[2rem] text-bGrey text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        <Button text="Shop Now" />
      </div>

      <div className=''>
        <img className=' w-full h-full object-cover' src={sofa} alt="" />

      </div>
    </div>
  )
}

export default MatchStyles