"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="input-group" style={{ maxWidth: "600px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search for projects..."
        aria-label="Search"
      />
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
