import React, { useState } from 'react';

interface NumericInputProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

const NumericInput = ({ initialValue = 0, min = 0, max = 100 }: NumericInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      setValue(prevValue => prevValue + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(prevValue => prevValue - 1);
    }
  };

  return (
    <div className="flex items-center border border-gray rounded-lg">
      <button
        onClick={handleDecrement}
        className="w-4 h-8 flex justify-center items-center cursor-pointer ml-2 mt-1 mb-1"
      >
        -
      </button>
      <input
        type="text"
        value={value}
        readOnly
        className="w-10 h-8 text-center mx-1 mt-1 mb-1"
      />
      <button
        onClick={handleIncrement}
        className="w-4 h-8 flex justify-center items-center cursor-pointer mr-2 mt-1 mb-1"
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
