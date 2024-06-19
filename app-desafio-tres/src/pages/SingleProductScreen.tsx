import React from 'react'
import Description from '../components/description/Description'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import ProductDetails from '../components/details/ProductDetails'
import ProductImages from '../components/details/ProductImages'

const SingleProductScreen = () => {
  return (
    <div>
      <Navbar/>
      <ProductImages/>
      <ProductDetails/>
      <Description/>
      <Footer/>
      
    </div>
  )
}

export default SingleProductScreen;
