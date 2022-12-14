import React from "react";
import Nav from "./Nav";
import selectFile from "./select-file.jpeg";
import safeSecure from "./safe-secure.jpeg";
import share from "./share.jpeg";
import receiver from "./receiver.jpeg";
import downloads from "./downloads.jpeg";
import password from "./password.jpeg";
import cloud from "./cloud.jpeg";
import { useState } from "react";
import BlueBtn from "./BlueBtn";
import Footer from "./Footer";
import FloatBtn from "./FloatBtn";

const HowItWorks = () => {
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
  const [steps] = useState([
    {
      img: selectFile,
      id: 1,
      title: "Select your File. Xend supports all file types.",
    },
    {
      img: password,
      id: 2,
      title:
        "Create a password for your File.  Xend-secure requires a password to keep your file secure. Only a person with the password can gain access to the file.",
    },
    {
      img: cloud,
      id: 3,
      title:
        "Upload Your file to the cloud. Our servers support large files so Feel free To upload large files. This action generates a shareable link.",
    },
    {
      img: share,
      id: 4,
      title: "Share the generated file link to the receiver.",
    },
    {
      img: receiver,
      id: 5,
      title:
        "The receiver clicks on the link, inputs the password and gains access to the file.",
    },
    { img: downloads, id: 6, title: "Receiver downloads the file." },
    {      img: safeSecure,
      id: 7,
      title: "All seamless and secure."},
  ]);
  return (
    <div className="body">
      <Nav />
      <div id="how-to">
      <h1>How To Use Xend-secure</h1>
      <h3>Step by step guide on using Xend-secure</h3>
</div>
      <div id="steps">
  
          {
            steps.map(
              (step)=> (
                <div className="step" key={step.id}>
                  <img src={step.img} alt="step-illustration" />
                  <h3>{step.title}</h3>
               </div>
              )
            )
          }
        </div>
      <div className="action">
      <BlueBtn  title="GET STARTED NOW" color="white" bgcolor="#0361FF" link="https://xend-secure.herokuapp.com/"/>
      </div>
      <Footer />
      <FloatBtn />
    </div>
  );
};

export default HowItWorks;
