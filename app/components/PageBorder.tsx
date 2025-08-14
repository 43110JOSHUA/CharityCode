import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageBorder = ({ children }: Props) => {
  return (
    <div className="px-0 px-md-5">
      <div className="px-0 px-xl-5">
        <div className="px-0 px-xl-5">
          <div className="px-0 px-xl-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageBorder;
