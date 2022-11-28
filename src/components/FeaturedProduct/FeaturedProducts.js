import React from "react";
import { data } from "../Data/Data";
import "./FeatureProducts.css";

function FeaturedProducts() {
  return (
    <>
      <div className="featured-products">
        <div className="content">
          <h2 data-aos="fade-down">Featured Product</h2>
          <p data-aos="fade-down" data-aos-delay="600">
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla{" "}
            <br />
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
        <div className="fea-prod">
          {data.featureProduct.map((item) => {
            return (
              <div className="prod" key={item.id} data-aos="flip-left" data-aos-delay={item.delay} data-aos-duration="1000">
                <div className="prod-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="prod-head">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="price">
                    <h5>${item.price}.00</h5>
                  </div>
                </div>
                <div className="prod-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <h6>Reviews({item.review})</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
