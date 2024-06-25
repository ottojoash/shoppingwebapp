'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ShopHeader: React.FC = () => {
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
          <a className="text-black hover:text-black cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ShopHeader;
