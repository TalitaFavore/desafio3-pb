import React from 'react'
import BillingForm from './BillingForm'
import Order from './Order'

const Checkout = () => {
  return (
    <div className='flex m-28 mt-20 gap-28'>
        <div className='w-1/2'>
        <BillingForm/>
        </div>

        <div className='w-1/2'>
        <Order/>

        </div>
    </div>
  )
}

export default Checkout
