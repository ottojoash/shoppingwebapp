'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import HeaderTop from '@/components/HeaderTop';
import dynamic from 'next/dynamic';

const ShopHeader = dynamic(() => import('../../pages/shop/shopheader'), { ssr: false });

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
  title: string;
  type: string;
  selectedColor: string;
  selectedSize: string;
  imageSrc: string;
  category: React.ReactNode;
}

const currencyRates: Record<'USD' | 'UGX' | 'EUR', number> = {
  USD: 1,
  UGX: 3700, // Example exchange rate
  EUR: 0.85, // Example exchange rate
};

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'UGX' | 'EUR'>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://backendshop-9nf6.onrender.com/api/shop/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const convertPrice = (price: number) => {
    return (price * currencyRates[currency]).toFixed(2);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <HeaderTop />
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as 'USD' | 'UGX' | 'EUR')}
            className="border border-gray-300 rounded p-2"
          >
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-[400px]">
            <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <div className="text-xl font-semibold mb-4">
              {currency} {convertPrice(product.price)} <span className="line-through text-gray-500 ml-2">{currency} {convertPrice(product.originalPrice)}</span>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
