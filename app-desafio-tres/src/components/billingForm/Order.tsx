import React, { useState } from "react";

const Order = () => {
  const [selectedOption, setSelectedOption] = useState("directBankTransfer");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="font-poppins flex flex-col mt-14">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between font-medium text-xl">
          <h2>Product</h2>
          <h2>Subtotal</h2>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex gap-4 ">
            <p className="text-gray">Asgaard sofa</p>
            <p>X</p>
            <p>1</p>
          </div>
          <p className="font-light">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p className="font-light">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Total</p>
          <p className="font-bold text-primary text-xl">Rs. 250,000.00</p>
        </div>
      </div>

      <hr className="border-gray8 mt-6 mb-4" />
      <div>
        <div className="flex flex-col gap-5 mb-6">
          <div>
            <label className="flex">
              <input
                type="radio"
                value="directBankTransfer"
                checked={selectedOption === "directBankTransfer"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <span
                className={`font-medium ${
                  selectedOption === "directBankTransfer"
                    ? "text-black"
                    : "text-gray"
                }`}
              >
                Direct Bank Transfer
              </span>
            </label>
          </div>

          {selectedOption === "directBankTransfer" && (
            <p className="font-light text-justify text-gray mt-1">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}
          <div>
            <label className="flex">
              <input
                type="radio"
                value="directBankTransfer1"
                checked={selectedOption === "directBankTransfer1"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <span
                className={`font-medium ${
                  selectedOption === "directBankTransfer1"
                    ? "text-black"
                    : "text-gray"
                }`}
              >
                Direct Bank Transfer
              </span>
            </label>
          </div>

          {selectedOption === "directBankTransfer1" && (
            <p className="font-light text-justify text-gray mt-1">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}

          <div>
            <label className="flex">
              <input
                type="radio"
                value="cashOnDelivery"
                checked={selectedOption === "cashOnDelivery"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <span
                className={`font-medium ${
                  selectedOption === "cashOnDelivery"
                    ? "text-black"
                    : "text-gray"
                }`}
              >
                Cash On Delivery
              </span>
            </label>
          </div>

          {selectedOption === "cashOnDelivery" && (
            <p className="font-light text-justify text-gray mt-1">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}
        </div>
        <p className="font-light text-justify">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <button className="flex border rounded-lg pl-16 pr-16 pt-2 pb-2 m-auto mt-10">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
