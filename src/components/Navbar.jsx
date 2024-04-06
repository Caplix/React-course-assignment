import React from 'react';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  
  return (

        <nav>
          <ul className="navBar-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart"><LuShoppingCart /></Link></li>
          </ul>
        </nav>

  );
};

export default Navbar;



