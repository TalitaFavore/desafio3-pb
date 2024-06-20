import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  new: boolean;
  sale: boolean;
  discount: number;
}

interface ProductsCardProps {
  product: Product;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const navigate = useNavigate();
  const discountedPrice = product.sale ? product.price * (1 - product.discount / 100) : product.price;

  const handleProductClick = () => {
    navigate(`/single/${product.id}`);
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
          <div className='flex flex-row justify-between items-center'>
            <p className="text-gray4 font-semibold text-xl">Rp {discountedPrice.toLocaleString()}</p>
            <p className="text-gray6 line-through">Rp {product.price.toLocaleString()}</p>
          </div>
        ) : (
          <p className="text-gray4 font-semibold text-xl">Rp {product.price.toLocaleString()}</p>
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
        <div className="flex space-x-2">
          <button className="text-white px-4 py-2 bg-primary rounded-lg">Add to Cart</button>
          <button className="text-white px-4 py-2 bg-secondary rounded-lg">Share</button>
          <button className="text-white px-4 py-2 bg-secondary rounded-lg">Compare</button>
          <button className="text-white px-4 py-2 bg-secondary rounded-lg">Like</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
