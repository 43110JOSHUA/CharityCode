"use client";
import React from "react";
import Link from "next/link";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={onClose}
        />
      )}

      {/* Side Navigation */}
      <div
        className={`side-nav-container rounded-start-4`}
        style={{
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0">Menu</h5>
          <button className="btn btn-sm" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="d-grid gap-2">
            <Link href="/explore" className="text-decoration-none">
              <button
                className="btn theme-btn btn-tan border-border-tan text-muted w-100"
                onClick={onClose}
              >
                Explore
              </button>
            </Link>
            <Link href="/dashboard" className="text-decoration-none">
              <button
                className="btn theme-btn btn-tan border-border-tan text-muted w-100"
                onClick={onClose}
              >
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
