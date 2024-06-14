import React, { useState, useEffect } from 'react';
import ProductList from './ProductsList';
import { getProducts } from '../../services/connectionRunMocky';

const ShopProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const productsData = await getProducts();
        const totalPages = Math.ceil(productsData.length / productsPerPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTotalPages();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <main className="flex flex-col items-center font-poppins">
      <ProductList productsPerPage={productsPerPage} currentPage={currentPage} />
      <div className="flex gap-6 mt-12 mb-12 ">
        {currentPage > 1 && (
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 bg-secondary rounded hover:bg-primary hover:text-white"
          >
            Previous
          </button>
        )}
        {pageButtons.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded ${currentPage === page ? 'bg-primary text-white' : 'bg-secondary '} hover:bg-primary hover:text-white`}
          >
            {page}
          </button>
        ))}
        {!((currentPage === totalPages) || (currentPage > totalPages)) && (
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-secondary  rounded hover:bg-primary hover:text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        )}
      </div>
    </main>
  );
};

export default ShopProducts;
