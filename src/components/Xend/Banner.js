import React from 'react'
import BlueBtn from './BlueBtn'

const Banner = () => {
  return (
    <div id='banner'>
      <h1>
        Quickly Transfer Files to Friends With Xend-secure
      </h1>
      <p id='tm'>Brought to you by eivolv</p>
      <p>Eivolv's Xend-secure is a platform that helps individuals and students send files <br /> securely over the internet</p>
      <BlueBtn title="GET STARTED NOW" color="white" bgcolor="#0361FF" link="https://xend-secure.herokuapp.com/"/>
    </div>
  )
}

export default Banner