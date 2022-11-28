import React from "react";
import { data } from "../Data/Data";
import "./Categories.css";

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="content">
          <h2 data-aos="fade-down">Categories of The Month</h2>
          <p data-aos="fade-down" data-aos-delay="600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br />
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="shopGo">
          {data.category.map((item) => {
            return (
              <div className="category" key={item.id} data-aos="fade-down" data-aos-delay={item.delay}>
                <div className="category-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <button>Go Shop</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
