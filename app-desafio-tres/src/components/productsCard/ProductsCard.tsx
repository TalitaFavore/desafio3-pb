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
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <p>Price: Rp {product.price.toLocaleString()}</p>
    </div>
  );
}

export default ProductsCard;
