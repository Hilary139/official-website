import {  React, useEffect } from "react";
import "./Xend.css";
import Banner from "./Banner";
import FloatBtn from "./FloatBtn";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import Favicon from "react-favicon";
import xendIcon from "./xend-icon.png"
const XendSecure = () => {
document.title = "Xend-secure"
  window.onscroll = (_) => {
    let x = window.pageYOffset;
    if (x > 500) {
      document.getElementById("FloatBtn").style.display = "block";
    } else {
      document.getElementById("FloatBtn").style.display = "none";
    }
  };
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
    let x = window.pageYOffset;
    if (x > 500) {
      document.getElementById("FloatBtn").style.display = "block";
    } else {
      document.getElementById("FloatBtn").style.display = "none";
    }
  }, [key, hash]);
  return (
    <div className="body">
      <Favicon url={xendIcon}/>
        <div id="header">
          <Nav />
          <Banner />
        </div>
        <Main />
        <Footer />
        <FloatBtn />
    </div>
  );
};
export default XendSecure;
