import React from 'react';

interface WarrantyProps {
  image: string;
  title: string;
  subtitle: string;
}

const Warranty = ({ image, title, subtitle }: WarrantyProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Warranty;
