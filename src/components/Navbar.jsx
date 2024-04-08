import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import SearchBar from './SearchBar'; // Assuming the SearchBar component is in the same directory

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = (value) => {
    console.log('Search:', value); // You can replace this with your actual search logic
  };

  return (
    <nav>
      <ul className="navBar-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart"><LuShoppingCart /></Link></li>
        <li>
          <SearchBar
            suggestions={['Apple', 'Banana', 'Cherry', 'Orange']} // Example suggestions array
            onSearch={handleSearch}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



