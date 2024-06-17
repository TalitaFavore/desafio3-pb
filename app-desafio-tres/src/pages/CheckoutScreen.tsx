import React from 'react'
import Navbar from '../components/header/Navbar'
import Header from '../components/header/Header'
import BillingForm from '../components/billingForm/BillingForm'
import Footer from '../components/footer/Footer'

const CheckoutScreen = () => {
  return (
    <div>
      <Navbar/>
      <Header title='Checkout' subtitle='Home > Checkout'/>
      <BillingForm/>
      <Footer/>
    </div>
  )
}

export default CheckoutScreen
