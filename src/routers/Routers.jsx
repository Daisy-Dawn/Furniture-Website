import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {LandingPage, About, Shop, Contact, Blog, NoPage, Cart, Wishlist, Login, Signup, ProductDetails} from '../pages/index'

const Routers = () => {
  return <Routes>
  <Route path='/' element={<Navigate to='home' />} />
    <Route path='home' element={<LandingPage />} />
    <Route path='about' element={<About />} />
    <Route path='shop' element={<Shop />} />
    <Route path='contact' element={<Contact />} />
    <Route path='blog' element={<Blog />} />
    <Route path='cart' element={<Cart />} />
    <Route path='wishlist' element={<Wishlist />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='*' element={<NoPage />} />
  </Routes>
}

export default Routers