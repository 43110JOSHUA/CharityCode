import React from "react";

interface IconButtonProps {
  icon: string; // e.g. "bi-moon", "bi-sun"
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
}: IconButtonProps) => (
  <button
    type="button"
    className={`btn btn-outline-dark btn-icon px-2 d-flex justify-content-center align-items-center`}
    style={{ width: "40px", height: "40px" }}
    onClick={onClick}
  >
    <i className={icon} style={{ fontSize: "1.5rem" }}></i>
  </button>
);

export default IconButton;
