import React from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="font-bold text-4xl pb-4 sm:pb-0 text-blackish">
          The Essential Man
        </div>

        <div className="flex justify-center gap-8 text-gray-600 text-lg mb-4 sm:mb-0">
          <a href="/shop" className="hover:text-black">Shop</a>
          <a href="/review" className="hover:text-black">Review</a>
          <a href="/about" className="hover:text-black">About</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
