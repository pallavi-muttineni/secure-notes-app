import React from 'react';

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
    />
  );
}

export default SearchBar;