'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import HeaderTop from '@/components/HeaderTop';
import dynamic from 'next/dynamic';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';

type Currency = 'USD' | 'UGX' | 'EUR';

const ShopHeader = dynamic(() => import('./shopheader'), { ssr: false });

interface Product {
  _id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  originalPrice: number;
  images: string[];
  title: string;
  type: string;
  selectedColor: string;
  selectedSize: string;
  imageSrc: string;
  category: ReactNode;
}

const currencyRates: Record<Currency, number> = {
  USD: 1,
  UGX: 3700, // Example exchange rate
  EUR: 0.85, // Example exchange rate
};

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://backendshop-9nf6.onrender.com/api/shop/products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const convertPrice = (price: number) => {
    return (price * currencyRates[currency]).toFixed(2);
  };

  const getRandomImage = (images: string[]) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <HeaderTop />
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product: Product) => (
            <div key={product._id} className="bg-white p-2 shadow rounded-lg">
              <Link href={`/product/${product._id}`} legacyBehavior>
                <a>
                  {/* Display a randomly selected image */}
                  <Image
                    src={product.images && product.images.length > 0 ? getRandomImage(product.images) : '/path/to/default/image.jpg'} // Fallback to a default image if no images are present
                    alt={product.name}
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover mb-2"
                    // Optional: Use the priority attribute for the main images
                    priority
                    onError={(e) => {
                      e.currentTarget.src = '/path/to/default/image.jpg'; // Fallback image on error
                    }}
                  />
                </a>
              </Link>
              <div className="text-center">
                <h3 className="text-md font-semibold text-pink-500">{product.name}</h3>
                <div className="rating flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <div className="text-md font-semibold text-blue-600 mb-2">
                  {currency} {convertPrice(product.price)}{' '}
                  <span className="line-through text-gray-500 ml-2">
                    {currency} {convertPrice(product.originalPrice)}
                  </span>
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
