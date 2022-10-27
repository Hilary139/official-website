import React from "react";
import Favicon from "react-favicon";
import Banner from "./Banner";
import "./Eivolv.css";
import eivolvIcon from "./favicon-white.svg";
import Header from "./Header";
import Main from "./Main";
const Eivolv = () => {
  document.title = "Eivolv";
  return (
    <main className="main">
      <Favicon url={eivolvIcon} />
        <Header />
      <div className="top">
        <Banner />
      </div>
      <Main />
    </main>
  );
};

export default Eivolv;
