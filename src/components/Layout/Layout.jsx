import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout() {
  return (
    <>
    <div className="grid grid-cols-6 ">
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-5">
        <Outlet />
      </div>
      
    </div>
    </>
  )
}

export default Layout