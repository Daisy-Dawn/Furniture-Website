import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import './Admin.css'

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='admin-layout font-inter'>
      <section className='admin-header'>
        <Header toggle={toggle} handleToggle={handleToggle} />
      </section>
        <section className={`admin-sidebar duration-500 ease-in-out sm:block ${toggle ? 'block' : 'hidden'}`}>
          <SideBar handleToggle={handleToggle} toggle={toggle} />
        </section>
        <section className='admin-outlet'>
        <Outlet />
        </section>
        
    </div>
  )
}

export default AdminLayout
