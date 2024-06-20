import React, { useState, useEffect } from "react";
import ProductsCard from "../productsCard/ProductsCard";
import { Product } from "../types/productTypes";

interface RelatedProductsProps {
  productId: string;
}

function RelatedProducts({ productId }: RelatedProductsProps) {
  const [allRelatedProducts, setAllRelatedProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`
        );
        const currentProduct: Product = await response.json();

        const allProductsResponse = await fetch(
          `http://localhost:4000/products`
        );
        const allProducts: Product[] = await allProductsResponse.json();

        const similarProducts = allProducts.filter(
          (product) =>
            product.id !== productId &&
            product.tags.some((tag) => currentProduct.tags.includes(tag))
        );

        setAllRelatedProducts(similarProducts);
        setVisibleProducts(similarProducts.slice(0, visibleCount));
      } catch (error) {
        console.error("Erro ao carregar produtos relacionados:", error);
      }
    };

    fetchRelatedProducts();
  }, [productId, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
    setVisibleProducts(allRelatedProducts.slice(0, visibleCount + 4));
  };

  return (
    <div>
      <h2 className="flex text-3xl font-semibold justify-center mt-10 mb-4">
        Related Products
      </h2>
      <div className="flex flex-wrap justify-between ml-20 mr-20 gap-4">
        {visibleProducts.map((product) => (
          <div className="flex-1 min-w-[22%]">
            <ProductsCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      {visibleProducts.length < allRelatedProducts.length && (
        <div className="flex justify-center">
          <button
            className="border border-primary w-40 pt-1 pb-1 text-primary font-semibold mt-5 mb-20 text-center"
            onClick={handleShowMore}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

export default RelatedProducts;
