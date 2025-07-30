import React from "react";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center py-2 px-2 px-md-3">
      <h1>Charity Code</h1>
      <h2>Your tagline here</h2>
      <button className="btn btn-primary">Donate</button>
    </nav>
  );
};

export default NavBar;
