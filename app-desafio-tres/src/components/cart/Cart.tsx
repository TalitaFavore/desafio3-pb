import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NumericInput from "../details/NumericInput";
import { RootState } from "../../redux/reducers";
import { CartItem } from "../../redux/types/cartTypes";
import { removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId) as any);
  };

  const renderCartItems = () => {
    return cartItems.map((item: CartItem) => (
      <div
        key={item.productId}
        className="flex flex-row justify-between items-center mt-12 text-gray"
      >
        <img
          src={item.image}
          alt={item.productName}
          className="w-20 rounded-lg"
        />
        <p>{item.productName}</p>
        <p>Rp. {item.price.toLocaleString()}</p>
        <NumericInput
          initialValue={item.quantity}
          min={1}
          max={100}
          productId={item.productId}
          isCartPage={true}
        />
        <p className="text-black">
          Rp. {(item.price * item.quantity).toLocaleString()}
        </p>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/trash.svg"
          alt="Delete"
          onClick={() => handleRemoveFromCart(item.productId)}
          className="cursor-pointer"
        />
      </div>
    ));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-row mr-28 ml-28 mt-16 mb-16 gap-10 font-poppins">
      <div className="w-2/3">
        <div className="flex flex-row bg-secondary justify-between pt-4 pb-4 pl-36 pr-36 font-medium">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {renderCartItems()}
      </div>

      <div className="flex flex-col pt-4 pb-20 w-1/3 bg-secondary">
        <h1 className="flex font-semibold text-3xl mb-10 justify-center">
          Cart Totals
        </h1>
        <div className="flex mb-5 pl-28 gap-8">
          <p>Subtotal</p>
          <p className="text-gray">
            Rp. {calculateSubtotal().toLocaleString()}
          </p>
        </div>
        <div className="flex mb-12 pl-28 gap-8">
          <p>Total</p>
          <p className="text-primary font-medium text-lg">
            Rp. {calculateSubtotal().toLocaleString()}
          </p>
        </div>
        <Link to="/checkout">
          <button className="flex border rounded-xl w-2/5 m-auto justify-center pt-3 pb-3">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
