"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="input-group" style={{ maxWidth: "600px" }}>
      <input
        type="text"
        className="form-control bg-dark-tan border-border-tan"
        placeholder="Search for projects..."
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
