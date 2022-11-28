import React from "react";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProduct/FeaturedProducts";
import SliderCart from "../components/Slider/Slider";

import "./Home.css"

function Home() {
  
  return (
    <>
      <SliderCart />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
