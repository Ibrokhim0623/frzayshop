import "./App.css";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import { data } from "./components/Data/Data";
import { useEffect, useState } from "react";
import Pages from "./Pages/Pages";
import Cart from "./Pages/Cart";
import Loader from "./components/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [products, setProducts] = useState(data.shopCart);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isCart, setIsCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);

  const handleAddToCart = (prod) =>
    setIsCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === prod.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...prod, amount: 1 }];
    });

  const handleRemove = (id) => {
    setIsCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;
          return [...cal, { ...item, amount: item.amount - 1 }];
        }
        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div className="App">
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Header setIsShowCart={setIsShowCart} isCart={isCart} />
          <Pages
            products={products}
            handleAddToCart={handleAddToCart}
            setProducts={setProducts}
          />
          {isShowCart && (
            <Cart
              setIsShowCart={setIsShowCart}
              isCart={isCart}
              handleAddToCart={handleAddToCart}
              handleRemove={handleRemove}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
