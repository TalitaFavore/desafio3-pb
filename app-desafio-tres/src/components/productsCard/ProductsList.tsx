import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import axios from 'axios';
 
interface Product {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  new: boolean;
  sale: boolean;
  discount: number;
}
 
interface ProductListProps {
  productsPerPage: number;
  currentPage: number;
  productsPerPage: number;
  currentPage: number;
}
 
const ProductsList = ({ currentPage }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const endpoints = [
    'https://run.mocky.io/v3/8ed755c5-5711-4905-ad57-c658b6f4a465',
    'https://run.mocky.io/v3/974b7426-bcf4-4471-aa23-8ac00fdda35d',
    'https://run.mocky.io/v3/0acc77c3-9d50-4f16-bdf2-03ca769bd4e3',
    'https://run.mocky.io/v3/1df2f89a-85bc-457b-8038-63e052465038',
    'https://run.mocky.io/v3/92ffab69-c3f0-4476-baf7-f75736d99d53',
    'https://run.mocky.io/v3/b00d5ee1-7d15-40fe-af26-926e58c36fe0',
    'https://run.mocky.io/v3/9055755f-67c3-41be-ac55-3ac4e73bec8e',
    'https://run.mocky.io/v3/a185e250-89fa-4e30-b247-e778bb8ce0f3',
    'https://run.mocky.io/v3/bc768eea-665e-46ed-827e-c438495ee834',
    'https://run.mocky.io/v3/fc6b68fd-6c22-4e6e-909b-ea2a2916fd56'
 
  ];
 
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(endpoints[currentPage - 1]);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
 
    fetchProducts();
  }, [currentPage, endpoints]);
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};
 
export default ProductsList;