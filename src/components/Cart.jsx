import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from './CartContext'; 


const Cart = () => {
    const { cart, clearCart } = useCart(); 
    const navigate = useNavigate();
  
    const totalPrice = cart.reduce((total, item) => {
      if (item && item.data && typeof item.data.price === 'number') {
        return total + item.data.price;
      }
      return total;
    }, 0);
  
    const handleCheckout = () => {
      clearCart();
      navigate('/CheckoutSuccessPage'); 
    };

  return (
    <div className='cart-body'>
      <h2>Items in your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.data && item.data.image && (
              <img src={item.data.image} alt={item.data.title} />
            )}
            {item.data && item.data.title && (
              <span>
                {' - '}
                {item.data.title}
              </span>
            )}
            {item.data && typeof item.data.price === 'number' && (
              <span>
                {' - $'}
                {item.data.price.toFixed(2)}
              </span>
            )}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
