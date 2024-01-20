// import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { NoShoppin3 } from '../assets'

const NoPage = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen font-nunito flex flex-col justify-center items-center'>
      <div className='lg:w-[750px] w-[400px] h-[250px] lg:h-[400px]  '>
        <img className='w-full h-full object-cover' src={NoShoppin3} alt="" />
      </div>
      <h1 className='text-slate-950  font-black my-[1rem] text-[20px] lg:text-[30px] uppercase'> Page Not found </h1>
      <p className='text-slate-950 px-[1.5rem] font-bold lg:text-[20px] text-[15px] capitalize mb-[0.75rem] lg:mb-[2rem] text-center'> Sorry, The Link you entered happens to have been broken or non-existent.  <br />
        <span className='text-rose-600 font-bold'> But dont worry, you can easily go back to our home and start shopping your favorite products. </span> </p>
      <button className='lg:py-[12px] py-[8px] lg:px-[20px] px-[10px]  rounded-[10px] font-nunito bg-slate-950 hover:bg-slate-800 text-white text-[15px] lg:text-[22px] font-bold text-center flex items-center justify-center'>
        <Link to='#' onClick={() => navigate('/')}> Go back to Home ? </Link>
      </button>
    </div>
  )
}

export default NoPage