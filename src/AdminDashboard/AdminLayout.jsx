import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import './Admin.css'

const AdminLayout = () => {
  return (
    <div className='admin-layout font-inter'>
      <section className='admin-header'>
        <Header />
      </section>
        <section className='admin-sidebar'>
          <SideBar />
        </section>
        <section className='admin-outlet'>
        <Outlet />
        </section>
        
    </div>
  )
}

export default AdminLayout
