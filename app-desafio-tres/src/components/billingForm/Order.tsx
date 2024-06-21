import React from "react";

const Order = () => {
  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <h3>Product</h3>
        <h3>Subtotal</h3>
      </div>
      <div>
        <p>Asgaard sofa</p>
        <p>X</p>
        <p>1</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>Rs. 250,000.00</p>
      </div>
      <div>
        <p>Total</p>
        <p>Rs. 250,000.00</p>
      </div>
      <hr />
      <div>
        <div>
          <label>
            <input type="radio" value="creditCard" />
            Direct Bank Transfer
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </label>
          <label>
            <input type="radio" value="paypal" />
            Direct Bank Transfer
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </label>
          <label>
            <input type="radio" value="bankTransfer" />
            Cash On Delivery
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </label>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
