"use client";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";

const NavBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <nav className="bg-body-tertiary border-bottom d-flex gap-3 justify-content-between align-items-center py-2 px-3 px-md-5  ">
        <div className="d-flex gap-2 align-items-center">
          <Avatar src="/CCicon.png" />
          <h4 className="pt-2 fw-bold d-none d-sm-block text-nowrap">
            Charity Code
          </h4>
        </div>
        <SearchBar />
        <IconButton icon="bi bi-list" onClick={toggleSideNav} />
      </nav>

      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
    </>
  );
};

export default NavBar;
