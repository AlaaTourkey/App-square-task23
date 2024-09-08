import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function DashboardLayout() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default DashboardLayout