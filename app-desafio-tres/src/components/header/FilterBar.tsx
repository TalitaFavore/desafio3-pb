import React from "react";

const FilterBar = () => {
  return (
    <div>
      <img
        src="https://pb-desafio3.s3.us-east-2.amazonaws.com/filter.svg"
        alt=""
      />
      <p>Filter</p>
      <img
        src="https://pb-desafio3.s3.us-east-2.amazonaws.com/grid.svg"
        alt=""
      />
      <img
        src="https://pb-desafio3.s3.us-east-2.amazonaws.com/view-list.svg"
        alt=""
      />
      <p>Showing 1–16 of 32 results</p>
      <p>Show</p>
      <input type="number" placeholder="16" />
      <p>Sort By</p>
      <input type="text" placeholder="Default" />
    </div>
  );
};

export default FilterBar;
