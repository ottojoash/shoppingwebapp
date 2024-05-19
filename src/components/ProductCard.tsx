'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<PropsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  onAddToCart,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[10px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[10px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[10px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[10px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[10px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-1 border border-gray-200 rounded-xl w-[100px] h-[150px] sm:w-[150px] sm:h-[200px]">
      <Link href={`/products/${title}`}>
        <div className="relative w-full h-[50px] sm:h-[100px]">
          <Image
            className="object-cover rounded-t-xl"
            src={img}
            layout="fill"
            alt={title}
          />
        </div>
      </Link>
      <div className="space-y-1 py-1 sm:py-2 text-center">
        <h2 className="text-[10px] sm:text-sm text-accent font-medium uppercase">{title}</h2>
        <p className="text-[8px] sm:text-xs text-gray-500">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="text-[8px] sm:text-sm font-bold flex justify-center items-center gap-1 sm:gap-2">
          ${price}
          <del className="text-gray-500 font-normal text-[6px] sm:text-xs">
            ${parseInt(price) + 50}.00
          </del>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-1 sm:mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-1 sm:px-2 rounded text-[8px] sm:text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
