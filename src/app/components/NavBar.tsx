import React from "react";
import Image from "next/image";
import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <nav className="bg-body-tertiary d-flex justify-content-between align-items-center py-2 px-2 px-md-5  ">
      <Avatar src="/CCicon.png" />
      <h2>Your tagline here</h2>
    </nav>
  );
};

export default NavBar;
