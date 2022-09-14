import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import XendSecure from "./XendSecure";
const MobileMenu = () => {
  const closeMenu = _ => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.style.display = "none"

  }
  return (
    <div id="mobileMenu">
      <br />
      <p id="closeBtn" onClick={closeMenu}>x</p>
      <br />
      <br />
      <br />
        <Link to='/xend-secure' >Home</Link>
      <Link to="/xend-secure#xend-offers">What we offer</Link>
      <Link to="Offers">How it works</Link>
      <Link to="/">Eivolv</Link>

      <Routes>
          <Route path='/xend-secure'  element={<XendSecure/>} />
        </Routes>
    </div>
  );
};

export default MobileMenu;
