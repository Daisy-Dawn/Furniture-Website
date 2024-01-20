import React from 'react'

const Input = ({title, handleChange, value, name, color}) => {
  return (
        <label className='text-[13px] cursor-pointer label relative flex items-center gap-1 lg:text-[20px] text-gray-800 hover:text-bGrey'> 
            <input onChange={handleChange} value={value} id='input-radio' className="w-4 h-4  cursor-pointer" type="radio" name={name} />
            <span className='w-4 h-4 rounded-full absolute' style={{background: color}}></span>
            {title} </label>
        
  )
}

export default Input