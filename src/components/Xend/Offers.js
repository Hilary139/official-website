import React, { useState } from "react";
import BlueBtn from "./BlueBtn";
import shield from "./shield-check.svg";
import device  from "./desktop.svg";
import file  from "./file-plus.svg";
import globe  from "./globe.svg";

const Offers = () => {
  const [offers] = useState([
    {
      image: file,
      title: "Choose Once. Share everywhere.",
      content:
        "Xend allows you to transfer files easily with the generated file link",
      id:0
    },
    {
      image: device,
      title: "Unlimited devices.",
      content: "Receive and download files across different devices.",
      id:1
    },
    {
      image: shield,
      title: "Password & Security.",
      content:
        "Xend allows you to attach your personal password while sending your files or genrate one with our password generator.",
      id:2
    },
    {
      image: globe,
      title: "Available globally",
      content:
        "Save files with our Xcloud and access it anywhere with any device.",
      id:3
    },
  ]);
  return (
    <div id="xend-offers">
      <h2>Xend offers everything you need</h2>
      <div className="flex" id="offers">
        {offers.map((offer) => {
          return (
            <div className="offer" key={offer.id}>
              <img src={offer.image} alt="icon" />
              <h3>{offer.title}</h3>
              <p>{offer.content}</p>
            </div>
          )
        })}
      </div>
    <hr id="hr" />
      <div id="xcloud">
      <h3>Xcloud will be rolling out soon</h3>
      <BlueBtn title="CREATE YOUR ACCOUNT" link="" />
   </div>
    </div>
  );
};

export default Offers;
