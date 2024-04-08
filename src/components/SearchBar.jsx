import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('https://v2.api.noroff.dev/online-shop', {
          params: { query: inputValue },
        });
        setSuggestions(response.data.data); // Assuming the API response has a 'data' field with suggestions
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    if (inputValue.trim().length > 0) {
      fetchSuggestions();
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.title); // Assuming the suggestion object has a 'title' field
    setShowSuggestions(false);
    onSearch(suggestion); // Pass the selected suggestion to the parent component
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;