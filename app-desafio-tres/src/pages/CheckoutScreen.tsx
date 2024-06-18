import React from 'react'
import Navbar from '../components/header/Navbar'
import Header from '../components/header/Header'
import BillingForm from '../components/billingForm/BillingForm'
import Footer from '../components/footer/Footer'
import WarrantyBar from '../components/warranty/WarrantyBar'

const CheckoutScreen = () => {
  return (
    <div>
      <Navbar/>
      <Header title='Checkout' subtitle='Home > Checkout'/>
      <div className='flex flex-row ml-36 mr-36 mt-16 mb-20'>
      <BillingForm/>
      </div>
      <WarrantyBar/>
      <Footer/>
    </div>
  )
}

export default CheckoutScreen
