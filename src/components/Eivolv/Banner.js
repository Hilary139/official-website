import React from 'react'
import introImg from "./iintro-img.png"
const Banner = () => {
  return (
    <div className="banner">
          <div className='bannerText'>
        <p>Eivolv lets you,
        </p>
          <h1>
            Lorem ipsum dolor sit  <br /> amet consectetur adipisicing elit.</h1>
      <p>We are motivated by the situation of africa and aim to help africa by  Lorem, ipsum dolor.</p>
    
      </div>
      <img src={introImg} alt="eivolv intro Img" />
    </div>

  )
}

export default Banner