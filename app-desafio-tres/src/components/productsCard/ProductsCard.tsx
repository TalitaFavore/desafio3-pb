import React from 'react';

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
}

interface ProductsCardProps {
  product: Product;
}

function ProductsCard({ product }: ProductsCardProps) {
  return (
    <div className="max-w-sm overflow-hidden bg-gray3 m-2 text-gray4">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="pl-6 pr-6 pt-4 pb-4 mb-2">
        <div className="font-bold text-xl">{product.name}</div>
        <p className="text-gray5">{product.shortDescription}</p>
        <p>Rp {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ProductsCard;
