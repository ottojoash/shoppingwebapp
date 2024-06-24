import React from 'react';
import Link from 'next/link';

const HeaderMain: React.FC = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="pb-4 sm:pb-0">
          <img src="/assets/logo.jpg" alt="The Essential Man" className="h-10" />
        </div>
        <div className="flex justify-center gap-8 text-gray-600 text-lg mb-4 sm:mb-0">
          <Link href="/shop" legacyBehavior>
            <a className="hover:text-black">Shop</a>
          </Link>
          <Link href="/review" legacyBehavior>
            <a className="hover:text-black">Review</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-black">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
