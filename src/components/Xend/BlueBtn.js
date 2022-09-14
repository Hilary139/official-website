import React from 'react'

const BlueBtn = ({ title, link }) => {
  const ClickHandler = () => {
    window.location.href = link
  }
  return (
    <button className="actionBtn"  title={link} onClick={ClickHandler}>{ title }</button>
  )
}

export default BlueBtn