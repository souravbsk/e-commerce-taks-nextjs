import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="bg-[#013D29] hidden md:block py-3">
      <div className="container flex items-center justify-between text-white">
        <p className="flex items-center gap-2">
          <FaPhoneAlt></FaPhoneAlt> <span>+88016293523</span>
        </p>
        <p>Get 50% Off on Selected items | Shop Now</p>
        <div className="flex items-center gap-3">
          <select className="select bg-transparent select-bordered select-sm">
            <option>Eng </option>
            <option>Bangla</option>
            <option>Hindi</option>
          </select>
          <select className="select bg-transparent select-bordered select-sm ">
            <option  >
              Location
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
