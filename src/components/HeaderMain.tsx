import React from 'react';
import Link from 'next/link';

const HeaderMain: React.FC = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="pb-4 sm:pb-0">
          <img src="/logo_copy.jpg" alt="The Essential Man" className="h-10" />
        </div>
        <div className="w-full flex justify-between text-gray-600 text-lg">
          <div className="text-left flex-1">
            <Link href="/shop" legacyBehavior>
              <a className="hover:text-black">Shop</a>
            </Link>
          </div>
          <div className="text-center flex-1">
            <Link href="/review" legacyBehavior>
              <a className="hover:text-black">Review</a>
            </Link>
          </div>
          <div className="text-right flex-1">
            <Link href="/cart" legacyBehavior>
              <a className="hover:text-black">Cart</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
