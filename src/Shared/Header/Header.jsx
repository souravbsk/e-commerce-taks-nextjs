"use client"
import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const productStore = useSelector(state => state.cart);
  console.log(productStore);
  const navitem = (
    <>
      <li>
        <Link  className="font-medium" href="/">Categories</Link>
        
      </li>
      <li>
        <Link  className="font-medium" href="/">Deals</Link>
      </li>

      <li>
        <Link  className="font-medium" href="/">What`s New</Link>
      </li>
      <li>
        <Link className="font-medium"  href="/">Delivery</Link>
      </li>
    </>
  );
  return (
    <>
      <TopHeader></TopHeader>
      <nav className="flex flex-col lg:flex-row py-5 container items-center justify-between">
        <div>
          <Link
            href="/"
            className=" text-[#003D2A] normal-case font-bold text-xl"
          >
            ShopCart
          </Link>
        </div>

        <ul className=" my-5 md:my-0 flex-wrap flex justify-center flex-row items-center gap-3 md:gap-5 px-1">{navitem}</ul>

        <div>
          <ul className="flex items-center gap-3">
            <li className="hidden md:block">
              {" "}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
            </li>
            <li > <Link className="flex items-center gap-3 font-medium" href="/"><FaUserAlt></FaUserAlt> Account</Link></li>
            <li className="relative" > <Link className="flex items-center gap-3 font-medium" href="/cart"><FaShoppingCart></FaShoppingCart> Cart <span className="absolute left-0 text-sm -top-4 bg-[#013D29] px-2 py-1 rounded-full text-white">{productStore?.length} </span></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
