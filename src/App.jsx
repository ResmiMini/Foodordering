import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const decreaseQty = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } // don’t go below 1
        : item
    )
  );
};

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        // if item already in cart, increase qty
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // else add new product with qty = 1
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}  />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
<Route
  path="/cart"
  element={<Cart cart={cart} addToCart={addToCart} decreaseQty={decreaseQty} />}
/>      </Routes>
    </div>
  );
}
