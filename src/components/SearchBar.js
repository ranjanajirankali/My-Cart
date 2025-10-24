import React, { useState } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [localTerm, setLocalTerm] = useState(searchTerm);

  const handleSearch = () => {
    setSearchTerm(localTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-3 search-bar">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={localTerm}
        onChange={(e) => setLocalTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="btn btn-primary btn-lg" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
