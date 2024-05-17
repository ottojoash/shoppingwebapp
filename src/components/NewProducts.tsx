'use client';

import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const productsData: Product[] = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/skirt-1.jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts: React.FC = () => {
  const handleAddToCart = (item: Product) => {
    console.log("Added to cart:", item.title); // Replace this with your cart handling logic.
  };

  return (
    <div className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">Best Sellers</h2>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 py-4">
        {productsData.map((item, index) => (
          <div key={index} className="shrink-0">
            <ProductCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              onAddToCart={() => handleAddToCart(item)} // Pass the function here
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
