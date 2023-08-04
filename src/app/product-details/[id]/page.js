"use client";
import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import {TbTruckDelivery} from "react-icons/tb"
import { FaCalendar } from "react-icons/fa";

const ProjectDetails = ({ params }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [params.id]);
  console.log(product);
  return (
    <div className="container">
      <div>
        <p className="font-medium text-[#013D29]">
          Home / product-details / {product?.brand} / {product?.title}
        </p>
      </div>
      <div className="flex my-12 flex-col md:flex-row">
        <div className="w-full"></div>
        <div className="w-full">
          <h2 className="text-xl mb-3 md:text-4xl font-bold">
            {product?.title}
          </h2>
          <p>{product?.description}</p>
          <div className="mt-3">
            <Rating
              className="text-[#003D2A]"
              readOnly
              style={{ maxWidth: 100 }}
              value={product?.rating}
            />
          </div>
          <div className="mt-5 space-y-4">
            <h3 className="text-2xl font-semibold">${product?.price}</h3>
            <p className="font-medium">{product?.discountPercentage}%</p>
            <p className="font-medium">Brand: {product?.brand}</p>
            <p className="font-medium">category: {product?.category}</p>
            <p className="font-medium">stock: {product?.stock}</p>
          </div>
          <div className="flex mt-8 items-center gap-5 flex-col md:flex-row">
            <button className="px-10 py-2 rounded-3xl text-white duration-300 bg-[#003D2A] border-[#003D2A] border font-semibold hover:bg-transparent hover:text-[#003D2A]">Buy Now</button>
            <button className="px-10 py-2 rounded-3xl hover:bg-[#003D2A] duration-300 text-[#003D2A] hover:text-white border-[#003D2A] border">Add to Cart</button>
          </div>
          <div className="mt-12">
            <ul className=" border rounded-lg divide-y-2">
                <li className="py-6 flex gap-4 px-5 flex-col md:flex-row">
                    <p className="text-[#FFB489]"><TbTruckDelivery size={20}></TbTruckDelivery></p>
                    <div>
                        <h4 className="font-semibold">Free Delivery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </li>
                <li className="py-6 flex gap-4 px-5 flex-col md:flex-row">
                    <p className="text-[#FFB489]"><FaCalendar size={20}></FaCalendar></p>
                    <div>
                        <h4 className="font-semibold">Return Delivery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
