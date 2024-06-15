import React from 'react'

interface InformationProps {
    image: string;
    title: string;
    information: string;
  }

const Information = ({ image, title, information }: InformationProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{information}</p>
    </div>
  )
}

export default Information;
