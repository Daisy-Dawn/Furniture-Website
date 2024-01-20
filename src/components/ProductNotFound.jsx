import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {NoShopping, NoShoppin3, NoShoppin4} from '../assets/index'

const ProductNotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen font-nunito flex flex-col justify-center items-center'>
    <div className='lg:w-[750px] w-[400px] h-[250px] lg:h-[400px]  '>
      <img className='w-full h-full object-cover' src={NoShopping} alt="" />
    </div>
      <h1 className='text-slate-950  font-black my-[1rem] text-[20px] lg:text-[30px] uppercase'>Product Not Found</h1>
      <p className='text-slate-950  font-bold lg:text-[20px] text-[15px] capitalize mb-[0.75rem] lg:mb-[2rem] text-center'> Sorry, the requested product is not available in our shop at the moment. <br /> 
      <span className='text-rose-600 font-bold'> But there are way cooler products in our shop!. </span> </p>
      <button className='lg:py-[12px] py-[8px] lg:px-[20px] px-[10px]  rounded-[10px] font-nunito bg-slate-950 hover:bg-slate-800 text-white text-[15px] lg:text-[22px] font-bold text-center flex items-center justify-center '>
        <Link to='#' onClick={() => navigate('/shop')}> Go back to shopping? </Link>
    </button>
    </div>
  )
}

export default ProductNotFound