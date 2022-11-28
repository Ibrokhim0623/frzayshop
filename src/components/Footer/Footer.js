import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <ul>
            <div className="logo"><a href="">Zay Shop</a></div>
            <li data-aos="fade-down" data-aos-delay="500"><span><i className="fa-solid fa-location-dot"></i></span>Uzbekistan, Navoi</li>
            <li data-aos="fade-down" data-aos-delay="700"><span><i className="fa-solid fa-phone"></i></span>+998931451323</li>
            <li data-aos="fade-down" data-aos-delay="900"><span><i className="fa-solid fa-envelope"></i></span>ibrohim0099barnoyev@gmail.com</li>
        </ul>
        <ul>
            <div className="logo"><h2>Products</h2></div>
            <li data-aos="fade-down" data-aos-delay="500">Luxury</li>
            <li data-aos="fade-down" data-aos-delay="700">Sport Wear</li>
            <li data-aos="fade-down" data-aos-delay="900">Men's Wear</li>
            <li data-aos="fade-down" data-aos-delay="1100">Women's Wear</li>
            <li data-aos="fade-down" data-aos-delay="1300">Popular Dress</li>
            <li data-aos="fade-down" data-aos-delay="1500">Gym Accessories</li>
            <li data-aos="fade-down" data-aos-delay="1700">Sport Shoes</li>
        </ul>
        <ul>
            <div className="logo"><h2>Further Info</h2></div>
            <li data-aos="fade-down" data-aos-delay="500">Home</li>
            <li data-aos="fade-down" data-aos-delay="700">About Us</li>
            <li data-aos="fade-down" data-aos-delay="900">Shop Locations</li>
            <li data-aos="fade-down" data-aos-delay="1100">FAQs</li>
            <li data-aos="fade-down" data-aos-delay="1300">Contact</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
