import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Header = () => {
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
            <li className="flex items-center gap-3 font-medium"><FaUserAlt></FaUserAlt> <Link href="/">Account</Link></li>
            <li className="flex items-center gap-3 font-medium"><FaShoppingCart></FaShoppingCart> <Link href="/">Cart</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
