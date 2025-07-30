"use client";
import React from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import IconButton from "./IconButton";

const NavBar = () => {
  return (
    <nav className="bg-body-tertiary border-bottom d-flex justify-content-between align-items-center py-2 px-4 px-md-5  ">
      <div className="d-flex d-wrap gap-2 align-items-center">
        <Avatar src="/CCicon.png" />
        <h4 className="pt-2 fw-bold">Charity Code</h4>
      </div>
      <IconButton
        icon="bi bi-person"
        onClick={() => window.open("https://github.com/43110JOSHUA", "_blank")}
      />
    </nav>
  );
};

export default NavBar;
