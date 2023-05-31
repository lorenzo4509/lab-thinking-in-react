import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" placeholder="Search products..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
