import React from "react";

const PathBar = () => {
  return (
    <div className="flex flex-row gap-3 bg-secondary p-7 mt-6 pl-32 font-poppins">
      <p className="text-gray">Home </p>
      <p>{">"}</p>
      <p className="text-gray">Shop</p>
      <p>{">"}</p>
      <p>| Aasgard Sofa</p>
    </div>
  );
};

export default PathBar;
