"use client";
import React, { useState } from "react";
import Avatar from "../Avatar";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";
import PageBorder from "../PageBorder";
import Link from "next/link";

const NavBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <div className="bg-tan sticky-top border-bottom border-border-tan">
        <PageBorder>
          <nav className="d-flex gap-3 justify-content-between align-items-center py-2 px-3">
            <div className="d-flex gap-2 align-items-center">
              <Link href="/" className="text-decoration-none">
                <Avatar src="/CCicon.png" />
              </Link>
              <Link href="/" className="text-decoration-none text-dark">
                <h4 className="pt-2 fw-bold d-none d-sm-block text-nowrap mb-2">
                  Charity Coder
                </h4>
              </Link>
            </div>
            <SearchBar />
            <MenuButton icon="bi bi-list" onClick={toggleSideNav} />
          </nav>
        </PageBorder>
      </div>

      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
    </>
  );
};

export default NavBar;
