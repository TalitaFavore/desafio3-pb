import React from "react";
import Warranty from "./Warranty";

const WarrantyBar = () => {
  return (
    <div className="flex flex-row justify-between pl-10 pr-10 pt-20 pb-20 bg-sand4 ">
      <Warranty
        image="https://pb-desafio3.s3.us-east-2.amazonaws.com/trophy.png"
        title="High Quality"
        subtitle="crafted from top materials"
      />

      <Warranty
        image="https://pb-desafio3.s3.us-east-2.amazonaws.com/guarantee.png"
        title="Warranty Protection"
        subtitle="Over 2 years"
      />

      <Warranty
        image="https://pb-desafio3.s3.us-east-2.amazonaws.com/shipping.png"
        title="Free Shipping"
        subtitle="Order over 150 $"
      />

      <Warranty
        image="https://pb-desafio3.s3.us-east-2.amazonaws.com/customer-support.png"
        title="24 / 7 Support"
        subtitle="Dedicated support"
      />
    </div>
  );
};

export default WarrantyBar;
