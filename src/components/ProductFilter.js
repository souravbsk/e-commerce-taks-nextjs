import React from "react";

const ProductFilter = () => {
  return (
    <div className="flex flex-col lg:flex-row md:items-center justify-between gap-12">
      <div className="flex shrink-0 lg:flex-nowrap flex-wrap items-center gap-5">
        <select className="select bg-[#EBECEC] select-bordered select-sm w-full ">
          <option>Headphone Type</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>

        <select className="select bg-[#EBECEC] select-bordered select-sm w-full ">
          <option>Material</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
        <select className="select bg-[#EBECEC] select-bordered select-sm w-full ">
          <option>Offer</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
        <select className="select bg-[#EBECEC] select-bordered select-sm w-full ">
          <option>All Filters</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      <div>
        <select className="select   bg-[#EBECEC] select-bordered select-sm w-full ">
          <option>Sort by</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
