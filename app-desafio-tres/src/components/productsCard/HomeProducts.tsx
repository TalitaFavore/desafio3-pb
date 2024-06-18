import React from 'react';
import ProductList from './ProductsList';

const HomeProducts = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="font-bold text-3xl mt-10 mb-4 text-gray4">Our Products</h1>
      <ProductList productsPerPage={16} currentPage={1} />
      <a href="/error" className="border border-primary w-40 pt-1 pb-1 text-primary font-semibold mt-5 mb-20 text-center">
        Show More
      </a>
    </main>
  );
};

export default HomeProducts;
