import React, { useState } from 'react'
import {logo} from '../assets'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
  const [query, setQuery] = useState("")
  const handleQueryChanange = e => setQuery(e.target.value)

  return (
    <div className='text-white px-[2rem] items-center justify-between h-full grid grid-cols-6 z-20 font-inter'>
      {/* LOGO */}
      <div className='col-span-1'>
        <img className='lg:w-[150px] w-[100px] sm:w-[120px]' src={logo} alt="" />
      </div>

      {/* SEARCH BAR */}
      <div className="relative col-span-3">
            <input
              className="rounded-[8px] text-[12px] sm:text-[14px] lg:text-[16px] sm:py-3 px-[3rem] p-1 w-full bg-darkBlue border-0 outline-none placeholder:font-normal lg:placeholder:text-[15px] sm:placeholder:text-[15px] placeholder:text-[10px] placeholder:text-white placeholder:mr-[1rem]  "
              placeholder="Search...."
              type="text"
              onChange={handleQueryChanange}
              value={query}
            />
            <span className="absolute top-2 lg:top-3 left-[10px]">
              <BiSearchAlt className="lg:size-6 size-4 text-white" />{" "}
            </span>
          </div>
    </div>
  )
}

export default Header
