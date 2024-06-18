import React from 'react'
import Navbar from '../components/header/Navbar'
import Header from '../components/header/Header'
import WarrantyBar from '../components/warranty/WarrantyBar'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

const ContactScreen = () => {
  return (
    <div>
      <Navbar/>
      <Header title="Contact" subtitle="Home > Contact"/>
      <Contact/>
      <WarrantyBar/>
      <Footer/>
    </div>
  )
}

export default ContactScreen
