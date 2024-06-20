import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import { Product } from '../types/productTypes'; 

interface ProductsListProps {
  productsPerPage: number;
  currentPage: number;
}

const ProductsList = ({ currentPage, productsPerPage }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:4000/products'); // Atualize a URL conforme necessário
        setProducts(response.data);
      } catch (error: any) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {currentProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
