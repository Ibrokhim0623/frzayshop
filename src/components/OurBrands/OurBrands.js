import React from "react";
import  Slider from "react-slick"
import brand1 from "../../assets/brand_01.png";
import brand2 from "../../assets/brand_02.png";
import brand3 from "../../assets/brand_03.png";
import brand4 from "../../assets/brand_04.png";

function OurBrands() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className="our-brands">
        <div className="content">
          <h2 data-aos="fade-down" data-aos-delay="500">Our Brands</h2>
          <p data-aos="fade-down" data-aos-delay="800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            <br /> eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="brands-slider">
          <Slider {...settings}>
            <div className="brand-img">
              <img src={brand1} alt="Error" />
            </div>
            <div className="brand-img">
              <img src={brand2} alt="Error" />
            </div>
            <div className="brand-img">
              <img src={brand3} alt="Error" />
            </div>
            <div className="brand-img">
              <img src={brand4} alt="Error" />
            </div>
            <div className="brand-img">
              <img src={brand1} alt="Error" />
            </div>
            <div className="brand-img">
              <img src={brand2} alt="Error" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default OurBrands;
