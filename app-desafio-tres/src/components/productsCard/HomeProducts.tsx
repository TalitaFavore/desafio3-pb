import React from 'react'
import ProductList from './ProductsList'

const HomeProducts = () => {
  return (
    <main>
        <h1>Our Products</h1>
      <ProductList displayCount={8} />
    </main>
  )
}

export default HomeProducts;
