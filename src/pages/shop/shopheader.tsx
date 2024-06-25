'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

const ShopHeader: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="border-b border-gray-200 py-4 bg-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Search Icon */}
        <div className="text-gray-600 hover:text-black cursor-pointer">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
        
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex justify-center">
            <img src="/logo.jpg" alt="Logo" className="h-10 cursor-pointer" />
          </a>
        </Link>
        
        {/* Cart Icon */}
        <Link href="/cart" legacyBehavior>
          <a className="text-black hover:text-black cursor-pointer relative">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ShopHeader;
