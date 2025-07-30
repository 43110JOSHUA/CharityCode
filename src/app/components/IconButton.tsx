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
    className={`btn btn-outline-secondary btn-icon px-2`}
    style={{ fontSize: "1rem" }}
    onClick={onClick}
  >
    <i className={icon}></i>
  </button>
);

export default IconButton;
