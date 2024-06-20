import React from "react";
import NumericInput from "../details/NumericInput";

const Cart = () => {
  return (
    <div className="flex flex-row mr-28 ml-28 mt-16 mb-16 gap-10 font-poppins">
      <div className="w-2/3">
        <div className="flex flex-row bg-secondary justify-between pt-4 pb-4 pl-36 pr-36 font-medium">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="flex flex-row justify-between items-center mt-12 text-gray">
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/muggo.png"
            alt=""
            className="w-20 rounded-lg"
          />
          <p>Asgaard sofa</p>
          <p>Rs. 250,000.00</p>
          <NumericInput initialValue={1} min={1} max={100} />
          <p className="text-black">Rs. 250,000.00</p>
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/trash.svg"
            alt=""
          />
        </div>
      </div>

      <div className=" flex flex-col pt-4 pb-20 w-1/3 bg-secondary">
        <h1 className="flex font-semibold text-3xl mb-10 justify-center">Cart Totals</h1>
        <div className="flex mb-5 pl-28 gap-8">
          <p >Subtotal</p>
          <p className="text-gray">Rs. 250,000.00</p>
        </div>
        <div className="flex mb-12 pl-28 gap-8">
          <p>Total</p>
          <p className="text-primary font-medium text-lg">Rs. 250,000.00</p>
        </div>
        <button className="flex border rounded-xl w-2/5 m-auto justify-center pt-3 pb-3">Check Out</button>
      </div>

    </div>
  );
};

export default Cart;
