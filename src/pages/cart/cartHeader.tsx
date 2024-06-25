'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const CartHeader: React.FC = () => {
  return (
    <div className="border-b border-gray-200 py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Search Icon */}
        <div className="text-gray-600 hover:text-black cursor-pointer">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
        
        {/* Logo */}
        <div className="flex-grow flex justify-center">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/logo.jpg" alt="Logo" className="h-10 cursor-pointer" />
            </a>
          </Link>
        </div>
        
        {/* Shop Icon */}
        <div className="text-gray-600 hover:text-black cursor-pointer">
          <Link href="/shop" legacyBehavior>
            <a className="hover:text-black">
              <FontAwesomeIcon icon={faStore} size="lg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
