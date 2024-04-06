// Cart.jsx
import React from 'react';
import { CartContext } from './CartContext'; 

const Cart = () => {
  const { cart, addToCart, removeFromCart } = React.useContext(CartContext); 
  return (
    <div>
      <h2>Items in your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.data.image} alt={item.data.title} /> - {item.data.title} - ${item.data.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
