import React from "react";
import "./Cart.css";

function Cart({ setIsShowCart, isCart, handleAddToCart, handleRemove }) {
  const total = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };

  return (
    <div className="cartPage">
      <div className="bg" onClick={() => setIsShowCart()}></div>
      <div className="cart-side">
        <div className="title">
          <h2>Cart</h2>
          <div onClick={() => setIsShowCart(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        {isCart.length === 0 && <h5>Your cart is empty</h5>}
        <div className="shopping">
          {isCart.map((item) => (
            <div className="shop-item" key={item.id}>
              <div className="shop-img">
                <img src={item.image} alt="" />
              </div>
              <div className="shop-content">
                <h2 className="amount">{item.amount}</h2>
                <h3 className="name">{item.name}</h3>
                <div className="btns">
                  <button onClick={() => handleAddToCart(item)}>+</button>
                  <h2>${item.price * item.amount}.00</h2>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="btn2"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p>Total: ${total(isCart)}.00</p>
      </div>
    </div>
  );
}

export default Cart;
