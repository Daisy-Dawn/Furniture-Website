import React from 'react'

const Input = ({title, handleChange, value, name, color}) => {
  return (
        <label> 
            <input onChange={handleChange} value={value} className="text-[13px] lg:text-[18px] mb-2 text-bGrey" type="radio" name={name} />
            <span style={{background: color}}></span>
            {title} </label>
        
  )
}

export default Input