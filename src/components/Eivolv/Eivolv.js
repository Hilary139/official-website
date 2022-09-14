import React from 'react'
import { Link } from "react-router-dom"
const Eivolv = () => {
  return (
    <div>
      <h2>Eivolv</h2>
      <ul>
        <Link to="/xend-secure">Xend-secure</Link>
        <Link to="/Xcloud">Xcloud</Link>
      </ul>

    </div>
  )
}

export default Eivolv