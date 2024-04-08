import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactPage from './ContactPage';
import HomePageFeed from './Feed';
import Cart from './Cart';
import { LuShoppingCart } from "react-icons/lu";
import ProductPage from './Product';
import { CartProvider } from './CartContext'; 
import { CheckoutSuccess } from './CheckoutSuccessPage';


const Isteflaske = () => {
  
  return (

    
    <CartProvider>
        <Routes>
          <Route path="/" element={<HomePageFeed />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/CheckoutSuccessPage" element={<CheckoutSuccess />} />

          <Route path="*" element={<div>Route not found</div>} />
        </Routes>
    </CartProvider>
  );
};

export default Isteflaske;