import React from 'react'
import Navbar from '../components/header/Navbar'
import Header from '../components/header/Header'
import Cart from '../components/cart/Cart'
import WarrantyBar from '../components/warranty/WarrantyBar'
import Footer from '../components/footer/Footer'
import Overlay from '../components/cart/Overlay'

const CartScreen = () => {
  return (
    <div>
      <Navbar/>
      <Header title='Cart' subtitle='Home > Cart'/>
      <Cart/>
      <WarrantyBar/>
      <Footer/>
      <Overlay/>
    </div>
  )
}

export default CartScreen
