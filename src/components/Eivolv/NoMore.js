import React from 'react'
import nomoreimg from "./nomore.png"
const NoMore = () => {
  return (
    <div className='no-more'>
      <div className="no-more-text">
      <h2>No More Worries About School Fees Payment</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae perferendis veritatis expedita. Alias, exercitationem minima error officia obcaecati odit.
      </p>
      <ul>
        <li>...........</li>
        <li>...........</li>
        <li>...........</li>
        </ul>
        <button>
          Learn More
        </button>
      </div>
      <div className="no-more-img">
        <img src={nomoreimg} alt=" no more" />
      </div>
    </div>
  )
}

export default NoMore