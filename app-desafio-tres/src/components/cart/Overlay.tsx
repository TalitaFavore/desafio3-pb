import React from "react";

const Overlay = () => {
  return (
    <div className=" flex flex-col justify-between font-poppins p-5 h-750">
      <div>
        <div className="flex ">
          <h1 className="text-2xl font-semibold mr-40">Shopping Cart</h1>
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/bag.svg"
            alt=""
          />
        </div>
        <hr className="w-2/3 mt-5 mb-10" />
        <div className="flex items-center">
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/leviosa.png"
            alt=""
            className="w-24 h-24 rounded-lg"
          />
          <div className="flex flex-col ml-6 mr-16">
            <h2>Asgaard sofa</h2>
            <div className="flex gap-4 items-center">
              <p> 1 </p>
              <p className="font-light text-sm">X </p>
              <p className="text-primary">Rs. 250,000.00</p>
            </div>
          </div>
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/close.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex gap-24">
          <p>Subtotal</p>
          <p className="text-primary font-semibold">Rs. 520,000.00</p>
        </div>

        <hr className="w-full border-gray8 mt-8 mb-8" />
        <div className="flex justify-between">
          <button className="border rounded-2xl pl-6 pr-6 pt-1 pb-1 text-sm">
            Cart
          </button>
          <button className="border rounded-2xl pl-6 pr-6 pt-1 pb-1 text-sm">
            Checkout
          </button>
          <button className="border rounded-2xl pl-6 pr-6 pt-1 pb-1 text-sm">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
