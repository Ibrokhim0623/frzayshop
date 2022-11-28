import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ setIsShowCart, isCart }) {
  const [menu, setMenu] = useState(false);
  const close = () => {
    setMenu(false);
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">Zay</Link>
        </div>
        <div className={menu ? "nav-list d-none" : "nav-list"}>
          <ul>
            <li onClick={close}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={close}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={close}>
              <Link to="/shop">Shop</Link>
            </li>
            <li onClick={close}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="icons">
            <div className="search icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="cartt icon" onClick={() => setIsShowCart(true)}>
              <i onClick={close} className="fa-solid fa-cart-plus"></i>
              {isCart.length >= 0 && <span className="count">{isCart.length}</span>}
            </div>
            <div className="user icon">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="close" onClick={close}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="menu" onClick={() => setMenu(!menu)}>
          <i className="fa-solid fa-bars"></i>
          {isCart.length > 0 && <span className="count">{isCart.length}</span>}
        </div>
      </header>
    </>
  );
}

export default Header;
