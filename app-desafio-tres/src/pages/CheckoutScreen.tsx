import React from 'react'
import Navbar from '../components/header/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import WarrantyBar from '../components/warranty/WarrantyBar'
import BillingForm from '../components/billingForm/BillingForm'

const CheckoutScreen = () => {
  return (
    <div>
      <Navbar/>
      <Header title='Checkout' subtitle='Home > Checkout'/>
      <BillingForm/>
      <WarrantyBar/>
      <Footer/>
    </div>
  )
}

export default CheckoutScreen
