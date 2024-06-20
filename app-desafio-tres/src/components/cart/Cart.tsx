import React from "react";
import NumericInput from "../details/NumericInput";

const Cart = () => {
  return (
    <div>
      <div>
        <div>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div>
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/muggo.png"
            alt=""
          />
          <p>Asgaard sofa</p>
          <p>Rs. 250,000.00</p>
          <NumericInput />
          <p>Rs. 250,000.00</p>
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/trash.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1>Cart Totals</h1>
        <div>
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div>
          <p>Total</p>
          <p>Rs. 250,000.00</p>
        </div>
        <button>Check Out</button>
      </div>

    </div>
  );
};

export default Cart;
