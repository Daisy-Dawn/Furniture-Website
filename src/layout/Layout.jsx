
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Routers from '../routers/Routers';

const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default Layout