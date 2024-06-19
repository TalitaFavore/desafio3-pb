import React from 'react'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'

const SingleProduct = () => {
  return (
    <div className='flex m-32 mt-10 mb-16 gap-24'>
      <ProductImages/>
      <ProductDetails/>
    </div>
  )
}

export default SingleProduct
