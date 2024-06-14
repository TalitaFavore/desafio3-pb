import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { getProducts } from "../../services/connectionRunMocky";

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
  displayCount: number;
}

const ProductList = ({ displayCount }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData.slice(0, displayCount));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [displayCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
