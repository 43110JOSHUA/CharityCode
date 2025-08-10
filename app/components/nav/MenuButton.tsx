import React, { useState } from "react";

interface IconButtonProps {
  icon: string; // e.g. "bi-moon", "bi-sun"
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
}: IconButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      className={`btn btn-dark-tan border-border-tan btn-icon px-2 d-flex justify-content-center align-items-center`}
      style={{ width: "40px", height: "40px" }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i
        className={hovered ? "bi bi-list-nested" : icon}
        style={{ fontSize: "1.5rem" }}
      ></i>
    </button>
  );
};

export default IconButton;
