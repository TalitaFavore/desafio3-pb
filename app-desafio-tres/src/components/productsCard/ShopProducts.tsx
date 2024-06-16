import React, { useState } from "react";
import ProductsList from "./ProductsList";
 
const ShopProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const productsPerPage = 16;
 
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
 
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
 
  const renderPageButtons = () => {
    let buttons = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-4 py-2 rounded ${
              currentPage === i ? "bg-primary text-white" : "bg-secondary"
            } hover:bg-primary hover:text-white`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage > 1) {
        buttons.push(
          <button
            key="prev"
            onClick={handlePreviousPage}
            className="px-4 py-2 rounded bg-secondary hover:bg-primary hover:text-white"
          >
            Back
          </button>
        );
      }
 
      if (currentPage > 2) {
        buttons.push(
          <button
            key="1"
            onClick={() => handlePageChange(1)}
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? "bg-primary text-white" : "bg-secondary"
            } hover:bg-primary hover:text-white`}
          >
            1
          </button>
        );
        if (currentPage > 3) {
          buttons.push(<span key="dots1" className="px-4 py-2">...</span>);
        }
      }
 
      for (let i = Math.max(currentPage - 1, 1); i <= Math.min(currentPage + 1, totalPages); i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-4 py-2 rounded ${
              currentPage === i ? "bg-primary text-white" : "bg-secondary"
            } hover:bg-primary hover:text-white`}
          >
            {i}
          </button>
        );
      }
 
      if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) {
          buttons.push(<span key="dots2" className="px-4 py-2">...</span>);
        }
        buttons.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages ? "bg-primary text-white" : "bg-secondary"
            } hover:bg-primary hover:text-white`}
          >
            {totalPages}
          </button>
        );
      }
 
      if (currentPage < totalPages) {
        buttons.push(
          <button
            key="next"
            onClick={handleNextPage}
            className="px-4 py-2 rounded bg-secondary hover:bg-primary hover:text-white"
          >
            Next
          </button>
        );
      }
    }
    return buttons;
  };
 
  return (
    <main className="flex flex-col items-center">
      <ProductsList productsPerPage={productsPerPage} currentPage={currentPage} />
      <div className="flex space-x-2 mt-10 mb-10">
        {renderPageButtons()}
      </div>
    </main>
  );
};
 
export default ShopProducts;