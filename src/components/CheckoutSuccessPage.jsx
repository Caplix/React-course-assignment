import React from 'react';
import { Link } from 'react-router-dom';
import alexasFotosImage from '../assets/images/alexas_fotos-pnGjbJEmU3o-unsplash.jpg';

const CheckoutSuccess = () => {
  return (
    <div className='checkoutpage'>
      <img src={alexasFotosImage} alt="Alexas Fotos" className="checkout-success-image" />

      <h2>Order Successful!</h2>
      <p>Your order has been successfully placed.</p>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccess;
