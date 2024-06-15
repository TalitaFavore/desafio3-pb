import React from "react";

interface WarrantyProps {
  image: string;
  title: string;
  subtitle: string;
}

const Warranty = ({ image, title, subtitle }: WarrantyProps) => {
  return (
    <div className="flex flex-row">
      <img src={image} alt="" />
      <div className="flex flex-col ml-4 font-poppins">
        <h1 className="font-semibold text-xl text-black2">{title}</h1>
        <h2 className="text-gray5 font-medium text-lg">{subtitle}</h2>
      </div>
    </div>
  );
};

export default Warranty;
