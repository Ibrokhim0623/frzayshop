import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ShoppingPage from "./ShoppingPage";
import Contact from "./Contact";

function Pages({
  products,
  handleAddToCart,
  setProducts
}) {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route
          element={
            <ShoppingPage
              handleAddToCart={handleAddToCart}
              products={products}
              setProducts={setProducts}
            />
          }
          path="/shop"
        />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </>
  );
}

export default Pages;
