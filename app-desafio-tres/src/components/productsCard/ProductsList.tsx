import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { getProducts } from "../../services/connectionRunMocky";

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
}

interface ProductListProps {
  displayCount: number;
}

function ProductList({ displayCount }: ProductListProps) {
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
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
