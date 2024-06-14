import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { getProducts } from '../../services/connectionRunMocky';

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
}

function ProductsList(props: ProductListProps) {
  const { productsPerPage, currentPage } = props;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {currentProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
