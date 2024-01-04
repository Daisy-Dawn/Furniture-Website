import React from 'react'
import {brand1, brand2, brand3, brand4, brand5} from '../assets'

const Brands = () => {
  return (
    <div className='grid grid-cols-5 items-center justify-between mx-[10rem] my-[4rem]  '>
      <img src={brand1} alt="" />
      <img src={brand2} alt="" />
      <img src={brand3} alt="" />
      <img src={brand4} alt="" />
      <img src={brand5} alt="" />
    </div>
  )
}

export default Brands