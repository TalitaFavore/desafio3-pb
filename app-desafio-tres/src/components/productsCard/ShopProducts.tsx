import React from 'react';
import ProductList from './ProductsList';

const ShopProducts = () => {
  return (
    <main className="flex flex-col items-center">
      <ProductList displayCount={16} />
    </main>
  );
};

export default ShopProducts;
