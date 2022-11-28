import React, { useState } from "react";
import { data } from "../components/Data/Data";
import OurBrands from "../components/OurBrands/OurBrands";
import "./ShoppingPage.css";

function ShoppingPage({products, handleAddToCart, setProducts}) {


    const filterMens = (index) => {
        const result = data.shopCart.filter((item) => {
            return item.category === index
        });
        setProducts(result)
    }

  return (
    <>
      <section className="shopping-page">
        <div className="shopping-left">
          <h2>Categories</h2>
          <div className="select">
            <select data-aos="fade-down" data-aos-delay="500">
              <option>Gender</option>
              <option>Man</option>
              <option>Women</option>
            </select>
            <select data-aos="fade-down" data-aos-delay="700">
              <option>Sale</option>
              <option>Man</option>
              <option>Women</option>
            </select>
            <select data-aos="fade-down" data-aos-delay="900">
              <option>Product</option>
              <option>Man</option>
              <option>Women</option>
            </select>
          </div>
        </div>
        <div className="shopping-right">
          <div className="shop-categories">
            <button onClick={() => setProducts(data.shopCart)} data-aos="fade-down" data-aos-delay="1100">All</button>
            <button onClick={() => filterMens("man")} data-aos="fade-down" data-aos-delay="1300">Men's</button>
            <button onClick={() => filterMens("woman")} data-aos="fade-down" data-aos-delay="1500">Women's</button>
          </div>
          <div className="shopping-elements">
            {products.map((products) => {
              return (
                <div className="shop-product" key={products.id}  data-aos="flip-left" data-aos-delay={products.delay} data-aos-duration="1000">
                  <div className="shop-img">
                    <img src={products.image} alt={products.name} />
                    <div className="opacity">
                      <button>
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button onClick={() => handleAddToCart(products)}>
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h4>{products.name}</h4>
                    <h5>{products.size}</h5>
                  </div>
                  <div className="starAndPrice">
                    <div className="stars">
                      <i className={products.class}></i>
                      <i className={products.class}></i>
                      <i className={products.class}></i>
                      <i className={products.class}></i>
                      <i className={products.class}></i>
                    </div>
                    <div className="price">
                      <h6>${products.price}.00</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <OurBrands />
    </>
  );
}

export default ShoppingPage;
