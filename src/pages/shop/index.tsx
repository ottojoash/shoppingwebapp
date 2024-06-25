'use client';

import React from 'react';
import Link from 'next/link';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import ShopHeader from './shopheader';
import { useCart } from '@/components/CartProvider';

const products = [
  {
    id: 1,
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 2,
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 3,
    name: "army green gurkha pant",
    price: "Ush 200,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 4,
    name: "Banana kaftan suit",
    price: "Ush 360,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <HeaderTop />
      {/* <HeaderMain /> */}
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded-lg">
              <img src={product.imageSrc} alt={product.name} className="w-full h-50 object-cover mb-2" />
              <div className="text-center">
                <h3 className="text-md font-semibold">{product.name}</h3>
                <div className="text-md font-semibold text-blue-600">{product.price}</div>
                <button
                  className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
