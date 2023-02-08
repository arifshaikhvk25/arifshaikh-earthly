import React from 'react'
import img from '../../imports/img'
import "./Header.css"
// import Aos from 'aos'
// import "aos/dist/aos.css"

const Header = () => {
  return (
    <div className='header' id='home'  >

      <div className="header-content"  >
        <h1 className='h1tag'>Ireland Discards more than 200 Million coffee cups a year</h1>

        <p className='ptag'>Join us in our mission towards reducing our Carbon Footprint and making Ireland a Zero-waste Circular Economy</p>
      </div>

      <div className="header-img">
        <img src={ img.hero } alt="hero image" />
      </div>
      
    </div>
  )
}

export default Header
