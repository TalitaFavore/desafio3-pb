import React from 'react'
import Description from '../components/description/Description'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import ProductDetails from '../components/details/ProductDetails'

const SingleProductScreen = () => {
  return (
    <div>
      <Navbar/>
      <ProductDetails/>
      <Description/>
      <Footer/>
      
    </div>
  )
}

export default SingleProductScreen;
