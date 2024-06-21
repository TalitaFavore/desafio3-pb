import React from "react";

interface InformationProps {
  image: string;
  title: string;
  information: string;
}

const Information = ({ image, title, information }: InformationProps) => {
  return (
    <div className="flex flex-row font-poppins mb-7">
      <div className="flex items-start">
        <img src={image} alt="" className="w-14" />
      </div>

      <div className="flex flex-col justify-end ml-5 mt-1">
        <h2 className="font-medium text-lg">{title}</h2>
        <p className="text-sm">{information}</p>
      </div>
    </div>
  );
};

export default Information;
