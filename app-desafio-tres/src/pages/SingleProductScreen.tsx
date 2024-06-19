import React from 'react'
import Description from '../components/description/Description'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import SingleProduct from '../components/details/SingleProduct'

const SingleProductScreen = () => {
  return (
    <div>
      <Navbar/>
      <SingleProduct/>
      <Description/>
      <Footer/>
      
    </div>
  )
}

export default SingleProductScreen;
