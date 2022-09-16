import {  React, useEffect } from "react";
import "./Xend.css";
import Banner from "./Banner";
import FloatBtn from "./FloatBtn";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import Favicon from "react-favicon";
const XendSecure = () => {
  window.onscroll = (_) => {
    let x = window.pageYOffset;
    if (x > 500) {
      document.getElementById("FloatBtn").style.display = "block";
    } else {
      document.getElementById("FloatBtn").style.display = "none";
    }
  };
  window.onload = (_) => {
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
  }, [key, hash]);
  return (
    <div className="body">
      <Favicon url="xend-logo.svg"/>
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
