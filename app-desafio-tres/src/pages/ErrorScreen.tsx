import React from 'react'
import Error from '../components/error/Error'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

const ErrorScreen = () => {
  return (
    <div>
        <Navbar/>
      <Error/>
      <Footer/>

    </div>
  )
}

export default ErrorScreen
