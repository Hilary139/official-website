import React from 'react'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import logo from "./xend-logo.svg"
const nav = () => {
  const showMobileMenu = _ => {
    const mobileMenu = document.getElementById("mobileMenu")
      mobileMenu.style.display = "block"
  }
  return (
    <nav id='nav'>
      <img src={logo} alt="logo" />
      <NavLinks />
      <MobileMenu />
      <p id='hamburgerIcon' onClick={showMobileMenu} onResize={showMobileMenu}>&equiv;</p>
    </nav>
  )
}

export default nav