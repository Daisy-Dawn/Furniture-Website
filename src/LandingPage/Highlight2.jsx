import React from 'react'
import { highlight2 } from '../assets'
import Button from '../components/Button'

const Highlight2 = () => {
  return (
    <div className='grid grid-cols-3 items-center mx-[5rem] py-[4rem] gap-[4rem]'>
      <div className='col-span-2 '>
        <img className='rounded-[10px] w-full h-full object-cover' src={highlight2} alt="" />
      </div>

      <div>
        <h2 className='text-lead font-bold text-[25px] capitalize'>Match Furniture Styles</h2>
        <p className='my-[2rem] text-bGrey text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        <Button text="Shop Now" />
      </div>

    </div>
  )
}

export default Highlight2