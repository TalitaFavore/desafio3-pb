import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  stars: number;
  reviews: number;
  sizes: string[];
  colors?: { name: string; hex: string }[];
  sku: string;
  category: string;
  tags: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Erro ao carregar o produto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Agrupa as atribuições em uma única linha
  const colors = product.colors || [];
  const sizes = product.sizes || [];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="font-poppins w-1/3">
      <h1 className="text-3xl">{product.name}</h1>
      <h2 className="font-medium text-gray mb-4">Rs. {product.price.toLocaleString()}</h2>
      <div className="text-gray flex items-center">
         <span className="ml-2">| {product.reviews} Customer Review</span>
      </div>
      <p className="mt-4 mb-5 w-4/5">{product.description}</p>

      <div>
        <p className="mb-3 text-gray">Size</p>
        <div className="flex space-x-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeSelect(size)}
              className={`w-10 h-10 rounded ${selectedSize === size ? 'bg-primary text-white' : 'bg-secondary'} hover:bg-primary hover:text-white`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {colors.length > 0 && (
        <div>
          <p className="mt-3 mb-3 text-gray">Color</p>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color.hex)}
                className={`p-2 rounded-full ${selectedColor === color.hex ? 'border-2 border-gray5' : ''}`}
                style={{
                  backgroundColor: color.hex,
                  width: '30px',
                  height: '30px',
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4 my-4">
        <button>1</button>
        <button className="pl-8 pr-8 pt-3 pb-3 rounded-xl text-black border hover:bg-secondary hover:text-black">
          Add To Cart
        </button>
      </div>

      <hr className="border-gray8 mt-10 mb-8" />

      <div className="text-gray">
        <p className="mb-2">SKU: {product.sku}</p>
        <p className="mb-2">Category: {product.category}</p>
        <p className="mb-2">Tags: {product.tags.join(', ')}</p>
        <div className="flex gap-4">
          <p className="mb-2">Share:</p>
          <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_facebook.svg" alt="" />
          <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_linkedin.svg" alt="" />
          <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/icons_twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
