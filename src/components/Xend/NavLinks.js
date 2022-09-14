import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import XendSecure from './XendSecure'
const NavLinks = () => {
  return (
    <>
        <ul id='navList'>
      <Link to='/xend-secure' >Home</Link>
      <Link to="/xend-secure#xend-offers">What we offer</Link>
      <Link to="/xend-secure#illustration">How it works</Link>
      <Link to="/">Eivolv</Link>
    </ul>
      <Routes>
          <Route path='/xend-secure'  element={<XendSecure/>} />
        </Routes>
      </>

  )
}

export default NavLinks