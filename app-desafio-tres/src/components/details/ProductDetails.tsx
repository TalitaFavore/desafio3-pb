import React, { useState } from "react";
import NumericInput from "./NumericInput";
import Stars from "./Stars";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="font-poppins w-1/3">
        <h1 className="text-3xl">Asgaard sofa</h1>
        <h2 className="font-medium text-gray mb-2">Rs. 250,000.00</h2>
        <div className="flex items-center text-gray">
          <Stars stars={2.5} />| 5 Customer Review
        </div>
        <p className="mt-2 mb-5 w-4/5">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div>
          <p className="mb-3 text-gray">Size</p>
          <div className="flex space-x-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-10 h-10 rounded ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "bg-secondary"
                } hover:bg-primary hover:text-white`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mt-3 mb-3 text-gray">Color</p>
          <div className="flex space-x-2">
            {[
              { name: "Red", hex: "#816DFA" },
              { name: "Green", hex: "#000000" },
              { name: "Blue", hex: "#B88E2F" },
            ].map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color.hex)}
                className={`p-2 rounded-full ${
                  selectedColor === color.hex ? "border-2 border-gray-500" : ""
                }`}
                style={{
                  backgroundColor: color.hex,
                  width: "30px",
                  height: "30px",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 my-4">
          <NumericInput initialValue={1} min={1} max={100} />
          <button className="pl-8 pr-8 pt-3 pb-3 rounded-xl text-black border hover:bg-secondary hover:text-black">
            Add To Cart
          </button>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-gray">
          <p className="mb-2">SKU: SS001</p>
          <p className="mb-2">Category: Sofas</p>
          <p className="mb-2">Tags: Sofa, Chair, Home, Shop</p>
          <div className="flex gap-4">
            <p className="mb-2">Share:</p>
            <img
              src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_facebook.svg"
              alt=""
            />

            <img
              src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_linkedin.svg"
              alt=""
            />

            <img
              src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_twitter.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
