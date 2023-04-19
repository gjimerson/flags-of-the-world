import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm);
    }
  }

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default SearchBar;