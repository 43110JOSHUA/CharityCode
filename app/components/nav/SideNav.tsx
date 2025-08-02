"use client";
import React from "react";

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
        className={`position-fixed top-0 end-0 h-100 bg-white shadow`}
        style={{
          width: "250px",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="mb-0">Menu</h5>
          <button className="btn btn-sm" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="d-grid gap-3">
            <button className="btn btn-primary">Explore</button>
            <button className="btn btn-secondary">Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
