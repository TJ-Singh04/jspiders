
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { ToastContainer} from 'react-toastify';

const Layout = () => {
  return (
    <>
        <ToastContainer position='bottom-right'/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
    </>
  )
}

export default Layout
