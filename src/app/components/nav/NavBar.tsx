"use client";
import React from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-body-tertiary border-bottom d-flex gap-3 justify-content-between align-items-center py-2 px-3 px-md-5  ">
      <div className="d-flex gap-2 align-items-center">
        <Avatar src="/CCicon.png" />
        <h4 className="pt-2 fw-bold d-none d-sm-block">Charity Code</h4>
      </div>
      <SearchBar />
      <IconButton
        icon="bi bi-list"
        onClick={() => window.open("https://github.com/43110JOSHUA", "_blank")}
      />
    </nav>
  );
};

export default NavBar;
