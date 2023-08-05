"use client";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add } from "@/Store/CartSlice/CartSlice";
import uniqid from 'uniqid';
const ProductDiv = ({ product }) => {
  const { id, thumbnail, title, price, description, rating } = product || {};
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const productWithUniqueId = { ...product, uniqId: uniqid() };   
    dispatch(add(productWithUniqueId))
  }

  return (
  
      <div className="flex h-[500px] relative border gap-5 rounded-lg overflow-hidden flex-col">
        <Link href={`/product-details/${id}`}>
        <div className="bg-[#F5F6F6] ">
          <Image
            src={thumbnail}
            className="w-full h-[280px]"
            width={325}
            height={280}
            alt="thumbnail"
          ></Image>
        </div>
          </Link>
        <div className="p-2 flex flex-col justify-between gap-2">
          <div className="flex mt-auto gap-4 justify-between">
            <h2 className=" font-bold">{title}</h2>
            <p className="text-lg font-bold">
              <sup>$</sup>
              {price}
              <sup>.00</sup>
            </p>
          </div>
          <div className="absolute space-y-3 pb-3 bottom-0 ">
            <p>
              {description.length > 30 ? description.slice(0, 30) : description}
            </p>
            <div>
              <Rating
                className="text-[#003D2A]"
                readOnly
                style={{ maxWidth: 100 }}
                value={rating}
              />
            </div>
            <button onClick={() => handleAddToCart(product)} className="rounded-3xl font-semibold hover:bg-[#003D2A] hover:text-white duration-300 border-2  border-[#003D2A] text-[#003D2A] px-4 py-2">
              Add to Cart
            </button>
          </div>
        </div>
        <p className="absolute right-5 bg-white px-2 py-2 rounded-full inline-block cursor-pointer text-2xl top-5">
          <FaRegHeart></FaRegHeart>
        </p>
      </div>
  );
};

export default ProductDiv;
