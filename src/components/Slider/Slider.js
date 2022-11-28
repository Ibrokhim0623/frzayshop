import React from 'react'
import { data } from '../Data/Data'
import Slider from "react-slick";
import './Slider.css'

function SliderCart() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
      <section className="slider">
        <Slider {...settings}>
          {data.slider.map((item, index) => {
            return (
              <div className="slider-section" key={item.id}>
                <div className="left-side">
                  <h2>{item.title}</h2>
                  <h4>{item.desc}</h4>
                  <p>{item.content}</p>
                </div>
                <div className="right-side">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  )
}

export default SliderCart
