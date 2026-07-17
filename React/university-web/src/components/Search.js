import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState(" ");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
        <p>Search for a course: </p>
        
        <input
    </div>
}