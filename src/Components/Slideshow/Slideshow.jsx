import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { data } from "../../imports"
import "./Slideshow.css"

const Slideshow = () => {
  return (

    <div className='slideshow-container' id='services'>

      <div className="slideshow-Heading" data-aos="fade-up" >
        <span> Our Product </span>
        <span> Product That Always </span>
        <span> Make You Fall In Love </span>
      </div>

      <div className="slideshow-Product">
        {

          data.Slideimg.map((eachSlideImg, index) => {
            return (

              <div className="slideshow-Info" key={index} data-aos="flip-up">

                <div className="slideshow-Wrapper">
                  <img src={eachSlideImg.imgUrl} alt="" height="300px" width="300px" />
                </div>

                <span>{eachSlideImg.name}</span>
                <span> {eachSlideImg.price} </span>

              </div>

            )
          })

        }

      </div>

    </div>

  )
}

export default Slideshow
