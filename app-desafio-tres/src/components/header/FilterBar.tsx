import React from "react";

const FilterBar = () => {
  return (
    <div className="flex justify-between pl-32 pb-7 pt-7 mb-12 bg-secondary font-poppins">
      <div className="flex w-1/3 justify-between items-center">
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/filter.svg"
          alt=""
          className="w-7"
        />
        <p>Filter</p>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/grid.svg"
          alt=""
          className="w-7"
        />
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/view-list.svg"
          alt=""
          className="w-7"
        />
        <p>Showing 1–16 of 32 results</p>
      </div>

      <div className="flex w-1/3 items-center">
        <p>Show</p>
        <input type="text" placeholder="16" className="w-12 h-12 ml-4 mr-4 p-3"/>
        <p>Sort By</p>
        <input type="text" placeholder="Default" className="w-32 h-12 ml-4 mr-4 pl-4" />
      </div>
    </div>
  );
};

export default FilterBar;
