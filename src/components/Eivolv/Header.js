import React from 'react'
import { Link } from "react-router-dom"
import logo from "./eivolv-black.svg"
const Header = () => {
  return (
    <div className='Header'>
      <img src={logo} alt="eivolv logo" />
      <ul>
        <Link to="/xend-secure">Xend-secure</Link>
        <Link to="/Xcloud">Xcloud</Link>
      </ul>
    </div>
  )
}

export default Header