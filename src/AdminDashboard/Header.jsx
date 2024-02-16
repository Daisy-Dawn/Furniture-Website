import React, { useState } from 'react'
import { logo, logo1 } from '../assets'
import { BiSearchAlt } from 'react-icons/bi'
import { IoLogOutSharp } from 'react-icons/io5'
import { IoMdArrowDropright } from 'react-icons/io'
import { FaBell } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { BsListUl } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({handleToggle, toggle}) => {
  const [query, setQuery] = useState('')
  const handleQueryChanange = e => setQuery(e.target.value)
  // const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  // const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  const user = 'Edward Collins'
  const userInitials = user.slice(0, 1)
  const notificationNumber = 3
  const [openAdminSettings, setOpenAdminSettings] = useState(false)

  const openAdminBox = () => {
    setOpenAdminSettings(!openAdminSettings)
  }

  

  return (
    <div className='text-white relative sm:px-[2rem] px-[1rem] items-center justify-between h-full grid grid-cols-7 lg:grid-cols-6 z-20 font-inter'>
      {/* LOGO */}
      <div className='hidden md:block md:col-span-2 lg:col-span-1'>
      
        <img className='w-[150px] sm:w-[120px]' src={logo} alt='' />
      </div>

      <div className='md:hidden min-[500px]:gap-8 gap-4 flex items-center col-span-2'>
      <div onClick={handleToggle} className='sm:hidden cursor-pointer'>
        {toggle ? <AiOutlineClose className='size-[1.2rem]' /> : <BsListUl className='size-[1.2rem]' />}
      </div>
        <img className='w-[22px]' src={logo1} alt='' />
      </div>

      {/* SEARCH BAR */}
      <div className='relative lg:col-span-2 xl:col-span-3 col-span-3'>
        <input
          className='rounded-[8px] text-[12px] sm:text-[14px] lg:text-[16px] sm:py-3 sm:px-[1.5rem] md:px-[3rem] px-[1rem] py-1 w-full bg-darkBlue border-0 outline-none placeholder:font-normal lg:placeholder:text-[15px] sm:placeholder:text-[13px] placeholder:text-[10px] placeholder:text-white md:placeholder:mr-[1rem] placeholder:mr-0  '
          placeholder='Search....'
          type='text'
          onChange={handleQueryChanange}
          value={query}
        />
        <span className='absolute top-[8px] sm:top-4 md:top-[14px]  left-0 md:left-[20px] lg:left-[10px]'>
          <BiSearchAlt className='md:size-5 sm:size-4 size-3 text-white' />{' '}
        </span>
      </div>

      {/* USER PROFILES */}
      <div className='flex items-center justify-end md:gap-[1.8rem] gap-[1rem] lg:col-span-3 xl:col-span-2 col-span-2'>
        <span className='relative cursor-pointer'>
          <FaBell className=' size-[18px] md:size-[22px]' />
          <p className='absolute top-[-5px] left-2 text-white rounded-full bg-[#1E5EFF] px-1 text-[11px]'>
            {' '}
            {notificationNumber}{' '}
          </p>
        </span>
        <div className='flex gap-3 items-center'>
          <span className='bg-[#f56a00] align-middle md:text-[1rem] text-[0.65rem] py-1 px-2 rounded-[50%] font-semibold text-white'>
            {userInitials}
          </span>
          {/* <Avatar size='default' className='bg-[#f56a00] align-middle md:text-[1rem] text-[0.85rem] font-semibold text-white'> {userInitials} </Avatar> */}
          <h2 className='font-bold lg:block hidden text-[1rem]'> {user} </h2>
        </div>

        <h2
          onClick={openAdminBox}
          className='md:flex hidden items-center justify-center text-darkBlue font-semibold text-[1rem] gap-2 py-2 px-3 cursor-pointer rounded-lg bg-[#FFF]'
        >
          Admin{' '}
          <span>
            {' '}
            <IoIosArrowDown />{' '}
          </span>{' '}
        </h2>
      </div>

      {/* DROPDOWN */}
      <div
        className={`absolute top-[4.5rem] flex-col sidebar  right-5 border-[1px] border-[#E7E7E3] rounded-lg py-[1rem] bg-white text-darkBlue px-[2rem] ${
          openAdminSettings ? 'flex' : 'hidden'
        } `}
      >
        <h2 className='text-[1.2rem] font-bold text-[#232321] mb-2'>Admin</h2>
        <h2 className='uppercase cursor-pointer hover:bg-slate-100 py-3 flex items-center justify-between gap-4 text-[#232321] font-semibold text-[1rem]'>
          {' '}
          Change password{' '}
          <span>
            {' '}
            <IoMdArrowDropright size={22} />{' '}
          </span>{' '}
        </h2>
        <h2 className='uppercase cursor-pointer hover:bg-slate-100 py-3 flex items-center justify-between gap-4 text-[#232321] font-semibold text-[1rem]'>
          {' '}
          Log out{' '}
          <span>
            {' '}
            <IoLogOutSharp size={22} />{' '}
          </span>{' '}
        </h2>
      </div>

      {/* RESPONSIVENESS */}
    </div>
  )
}

export default Header
