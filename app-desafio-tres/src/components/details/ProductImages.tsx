import React from 'react'

const ProductImages = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-16 mr-8'>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/lolito.png" className='mb-5' alt="" />
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/lolito.png" className='mb-5' alt="" />
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/lolito.png" className='mb-5' alt="" />
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/lolito.png" className='mb-5' alt="" />
      </div>
      <div className='flex w-96 h-96'>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/lolito.png" alt="" />
      </div>
    </div>
  )
}

export default ProductImages
