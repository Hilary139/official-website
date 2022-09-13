import React from "react";

const MobileMenu = () => {
  const closeMenu = _ => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.style.display = "none"
    mobileMenu.style.right = "-10000000px"
    
  }
  return (
    <div id="mobileMenu">
      <br />
      <p id="closeBtn" onClick={closeMenu}>x</p>
      <br />
      <br />
      <br />
        <li>Home</li>
        <li>What we offer</li>
        <li>How it works</li>
        <li>Eivolv</li>
    </div>
  );
};

export default MobileMenu;
