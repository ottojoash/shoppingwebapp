'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import ShopHeader from './shopheader';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  priceUSD: number; // Use numeric type for easier conversion
  originalPriceUSD: number;
  img: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Jacket",
    description: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    priceUSD: 45.00,
    originalPriceUSD: 55.00,
    img: '/jacket-1.jpg', // Update this path
  },
  {
    id: 2,
    name: "Skirt",
    description: "Black Floral Wrap Midi Skirt",
    rating: 5,
    priceUSD: 55.00,
    originalPriceUSD: 65.00,
    img: '/shirt-1.jpg', // Update this path
  },
  {
    id: 3,
    name: "Party Wear",
    description: "Women's Party Wear Shoes",
    rating: 3,
    priceUSD: 25.00,
    originalPriceUSD: 35.00,
    img: '/suit.jpg', // Update this path
  },
  {
    id: 4,
    name: "Banana kaftan suit",
    description: "Stylish banana-colored kaftan suit",
    rating: 4,
    priceUSD: 100.00,
    originalPriceUSD: 120.00,
    img: '/kaftan.jpg', // Update this path
  },
];

const currencyRates = {
  USD: 1,
  UGX: 3700, // Example exchange rate
  EUR: 0.85, // Example exchange rate
};

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [currency, setCurrency] = useState('USD');

  const convertPrice = (priceUSD: number) => {
    return (priceUSD * currencyRates[currency]).toFixed(2);
  };

  return (
    <div>
      <HeaderTop />
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product: Product) => (
            <div key={product.id} className="bg-white p-2 shadow rounded-lg">
              <Link href={`/product/${product.id}`} legacyBehavior>
                <a>
                  <Image src={product.img} alt={product.name} width={150} height={150} className="w-full h-32 object-cover mb-2" />
                </a>
              </Link>
              <div className="text-center">
                <h3 className="text-md font-semibold text-pink-500">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="rating flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <div className="text-md font-semibold text-blue-600 mb-2">
                  {currency} {convertPrice(product.priceUSD)} <span className="line-through text-gray-500 ml-2">{currency} {convertPrice(product.originalPriceUSD)}</span>
                </div>
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
