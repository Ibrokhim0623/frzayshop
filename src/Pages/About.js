import React from "react";
import "./About.css";
import aboutImg from "../assets/about-hero.svg";
import { data } from "../components/Data/Data";
import OurBrands from "../components/OurBrands/OurBrands";

function About() {
  return (
    <>
      <section className="about">
        <div className="left-side"  data-aos="fade-down" data-aos-duration="1000">
          <h1>About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            doloremque nemo inventore temporibus itaque aliquam accusamus illo
            minus voluptatem delectus sint blanditiis, repellat fugit placeat
            ducimus adipisci consectetur iusto ex dolore vero iste quisquam
            natus rerum et. Iusto odit expedita quod, quisquam nemo quae, dolor,
            ratione fugit ipsam perferendis error.
          </p>
        </div>
        <div className="right-side" data-aos="fade-up" data-aos-duration="1000">
          <img src={aboutImg} alt="Error" />
        </div>
      </section>
      <div className="our-services">
        <div className="content">
          <h2 data-aos="fade-up">Our Services</h2>
          <p  data-aos="fade-up" data-aos-delay="500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            <br /> eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="services-data">
          {data.services.map((item) => {
            return (
              <div className="service-card" key={item.id}  data-aos="zoom-in-down" data-aos-delay={item.delay}>
                <div className="service-icon">
                  <i className={item.class}></i>
                </div>
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <OurBrands />
    </>
  );
}

export default About;
