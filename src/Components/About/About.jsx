import React from 'react'
import "./About.css"

import img from "../../imports/img"

const About = () => {
  return (
    <div className='aboutUs' id='about' data-aos="fade-up" >

      <div className="aboutImg">
        <img src={img.bg} alt="about image" />
      </div>

      <div className="aboutUs-Content">

        <h2 className='aboutH1'>About Earthly</h2>
        <div className='emptydiv'></div>

        <p className='aboutPtag'>It’s high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products. Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate. These are items produced using sustainable and organic raw materials. Earthly products are of the best quality and in the best designs. What’s more, it’s shockingly easy to roll out sure improvements to your way of life just by sorting out where to begin. Rather than utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. Earthly organic products are the most affordable option in the market. The other alternatives are expensive and lack quality.</p>

      </div>


    </div>

  )
}

export default About
