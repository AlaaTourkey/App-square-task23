import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout() {
  return (
    <>
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-3">
        <Outlet />
      </div>
      
    </div>
    </>
  )
}

export default Layout