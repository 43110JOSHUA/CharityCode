import React from "react";
import Image from "next/image";
import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <nav className="bg-body-tertiary d-flex justify-content-between align-items-center py-2 px-4 px-md-5  ">
      <div className="d-flex d-wrap gap-2 align-items-center">
        <Avatar src="/CCicon.png" />
        <h4 className="pt-2 fw-bold">Charity Code</h4>
      </div>
    </nav>
  );
};

export default NavBar;
