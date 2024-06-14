import React from 'react';

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

function ProductsCard({ product }: ProductsCardProps) {
  const discountedPrice = product.sale ? product.price * (1 - product.discount / 100) : product.price;

  return (
    <div className="relative max-w-sm overflow-hidden bg-gray3 m-2 text-gray4 font-poppins">
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
    </div>
  );
}

export default ProductsCard;