// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    const saveCartToLocalStorage = (updatedCart) => {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    const addToCart = (product) => {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    };
  
    const clearCart = () => {
      setCart([]); // Set cart to an empty array
      saveCartToLocalStorage([]); // Clear cart in localStorage
    };
  
    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  };