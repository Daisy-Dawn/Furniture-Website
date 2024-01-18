import React from 'react'
import {brand1, brand2, brand3, brand4, brand5} from '../assets'

const Brands = () => {
  return (
    <div className='md:grid md:grid-cols-5 flex flex-wrap gap-[1rem] md:gap-[0rem] items-center justify-center md:justify-between xl:mx-[7rem] md:mx-[2rem] mx-[1rem] my-[4rem]  '>
      <img className='min-[270px]:w-[80px] min-[350px]:w-[100px] h-[50px]  xl:w-[200px] ' src={brand1} alt="" />
      <img className='min-[270px]:w-[80px] min-[350px]:w-[100px] h-[50px] xl:w-[200px] ' src={brand3} alt="" />
      <img className='min-[270px]:w-[80px] min-[350px]:w-[100px] h-[50px] xl:w-[200px] ' src={brand4} alt="" />
      <img className='min-[270px]:w-[80px] min-[350px]:w-[100px] h-[50px] xl:w-[200px]' src={brand5} alt="" />
      <img className='min-[270px]:w-[80px] min-[350px]:w-[100px] h-[50px] xl:w-[200px] ' src={brand2} alt="" />
    </div>
  )
}

export default Brands