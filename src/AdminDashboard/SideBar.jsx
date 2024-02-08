import React, { useState } from 'react'
import { PiUserCircleGearFill } from "react-icons/pi";
import { HiMiniHome } from "react-icons/hi2";
import { RiMenuSearchFill } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { IoIosFolderOpen } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { LiaChartBar } from "react-icons/lia";
import { RxStar } from "react-icons/rx";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SideBar = ({handleToggle }) => {
  const [active, setActive] = useState(0)
  const handleItemClick = (index) => {
    setActive(index);
    handleToggle();
  };

  const isItemActive = (index) => index === active;
  return (
    <div className='px-[1rem] text-white font-inter py-[1rem]'>
      {/* DASHBOARD */}
      <Link to='/admin'>
      <div 
      onClick={() => {
        handleToggle,
        handleItemClick(0)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(0) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <HiMiniHome className='size-[1rem] lg:size-[1.25rem]'  />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Dashboard</h2>
      </div>
      </Link>

      {/* ORDERS */}
      <Link to='orders'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(1)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(1) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <RiMenuSearchFill className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Orders</h2>
      </div>
      </Link>

      {/* Products */}
      <Link to='productsdashboard'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(2)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(2) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <IoPricetags className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Products</h2>
      </div>
      </Link>

      {/* Categories */}
      <Link to='categories'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(3)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(3) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <IoIosFolderOpen className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Categories</h2>
      </div>
      </Link>

      {/* Customers */}
      <Link to='customers'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(4)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(4) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <FaUsers className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Customers</h2>
      </div>
      </Link>

      {/* Reports */}
      <Link to='reports'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(5)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(5) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <LiaChartBar className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Reports</h2>
      </div>
      </Link>

      {/* Coupons */}
      <Link to='coupons'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(6)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(6) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <RxStar className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Coupons</h2>
      </div>
      </Link>
      
      {/* Inbox */}
      <Link to='inbox'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(7)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(7) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <HiMiniInboxArrowDown className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Inbox</h2>
      </div>
      </Link>

      {/* Other Information */}
      <h2 className='mt-5 mb-2 text-[0.8rem] lg:text-[1rem] font-normal'>Other Information</h2>

      {/* Knowledge Base */}
      <Link to='knowledgebase'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(8)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(8) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <FaPersonCircleQuestion className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Knowledge Base</h2>
      </div>
      </Link>

      {/* Product Updates */}
      <Link to='productupdate'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(9)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(9) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <MdTipsAndUpdates className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Product Updates</h2>
      </div>
      </Link>

      {/* Settings */}
      <h2 className='mt-5 mb-2 text-[0.8rem] lg:text-[1rem] font-normal'>Settings</h2>

      {/* Personal Settings */}
      <Link to='personalsettings'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(10)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(10) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <PiUserCircleGearFill className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Personal Settings</h2>
      </div>
      </Link>

      {/* Global Settings */}
      <Link to='globalsettings'>
      <div onClick={() => {
        handleToggle,
        handleItemClick(11)
      }} 
      className={`flex cursor-pointer mb-1 hover:bg-white rounded-[4px] hover:text-[#5A607F] px-[1rem] py-[0.5rem] items-center justify-start gap-4 ${isItemActive(11) ? "bg-white text-[#5A607F]" : "text-white"} `}>
        <span>
        <FaGear className='size-[1rem] lg:size-[1.25rem]' />
        </span>
        <h2 className='text-[1.1rem] mt-0 font-normal hidden lg:block'>Global Settings</h2>
      </div>
      </Link>

      <div style={{height: "4rem"}}></div>
    </div>
  )
}

export default SideBar
