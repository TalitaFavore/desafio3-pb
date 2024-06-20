import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions/cartActions";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Product } from "../types/productTypes";
import { CartItem } from '../../redux/types/cartTypes';

interface ProductsCardProps {
  product: Product;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discountedPrice = product.sale
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleProductClick = () => {
    navigate(`/single/${product.id}`);
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: parseInt(product.id),
      productName: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    dispatch(addToCart(cartItem) as any); 
    console.log(cartItem);
  };

  return (
    <div
      className="relative max-w-sm overflow-hidden bg-gray3 m-2 text-gray4 font-poppins group cursor-pointer"
      onClick={handleProductClick}
    >
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="pl-6 pr-6 pt-4 pb-4 mb-2">
        <div className="font-bold text-xl">{product.name}</div>
        <p className="text-gray5">{product.shortDescription}</p>
        {product.sale ? (
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray4 font-semibold text-xl">
              Rp {discountedPrice.toLocaleString()}
            </p>
            <p className="text-gray6 line-through">
              Rp {product.price.toLocaleString()}
            </p>
          </div>
        ) : (
          <p className="text-gray4 font-semibold text-xl">
            Rp {product.price.toLocaleString()}
          </p>
        )}
      </div>
      {product.new && (
        <div className="absolute top-2 right-2 bg-acquaGreen text-white text-xs font-bold w-10 h-10 flex items-center justify-center rounded-full">
          New
        </div>
      )}
      {product.sale && (
        <div className="absolute top-2 right-2 bg-lightRed text-white text-xs font-bold w-10 h-10 flex items-center justify-center rounded-full">
          -{product.discount}%
        </div>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-center">
          <button onClick={handleAddToCart} className="flex justify-center text-primary pt-2 pb-2 mb-8 bg-white w-48">
            Add to Cart
          </button>
          <div className="flex flex-row mr-3">
            <button className="flex items-center text-white">
              <ShareIcon style={{ color: 'white' }} className="w-3 h-3 ml-2" />
              Share
            </button>
            <button className="flex items-center text-white">
              <CompareArrowsIcon style={{ color: 'white' }} className="w-3 h-3 ml-2" />
              Compare
            </button>
            <button className="flex items-center text-white">
              <FavoriteBorderIcon style={{ color: 'white' }} className="w-3 h-3 ml-2" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
