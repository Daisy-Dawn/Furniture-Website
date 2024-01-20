import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, id}) => {
  return (
    <button className='py-[8px] px-[20px]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[16px] font-bold text-center flex items-center justify-center '>
        <Link to={`shop/${id}`}> {text} </Link>
    </button>
  )
}

export default Button