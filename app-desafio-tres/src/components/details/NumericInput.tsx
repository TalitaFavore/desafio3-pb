import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from '../../redux/actions/cartActions';

interface NumericInputProps {
  initialValue?: number;
  min?: number;
  max?: number;
  productId?: number;
  isCartPage?: boolean;
  onValueChange?: (value: number) => void;
}

const NumericInput = ({ initialValue = 0, min = 0, max = 100, productId, isCartPage = false, onValueChange }: NumericInputProps) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  const handleIncrement = () => {
    if (value < max) {
      setValue(prevValue => prevValue + 1);
      if (isCartPage && productId !== undefined) {
        dispatch(incrementItem(productId) as any);
      }
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(prevValue => prevValue - 1);
      if (isCartPage && productId !== undefined) {
        dispatch(decrementItem(productId) as any);
      }
    }
  };

  return (
    <div className="flex items-center border border-gray rounded-lg">
      <button
        onClick={handleDecrement}
        className="w-4 h-9 flex justify-center items-center cursor-pointer ml-2 mt-1 mb-1"
      >
        -
      </button>
      <input
        type="text"
        value={value}
        readOnly
        className="w-10 h-9 text-center mx-1 mt-1 mb-1"
      />
      <button
        onClick={handleIncrement}
        className="w-4 h-9 flex justify-center items-center cursor-pointer mr-2 mt-1 mb-1"
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
