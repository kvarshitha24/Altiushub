import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
     <div className='content-container'>
      <Navbar/>
     <div className='container'> 
      <Outlet/>
     </div>
     </div>
     <div className='footer-container'>
      <Footer/>
     </div>
    </div>
  )
}

export default RootLayout