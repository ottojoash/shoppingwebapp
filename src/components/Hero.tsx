import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      {/* Ensure the image path is correct and the image is accessible */}
      <img src="/banner-2.jpg" alt="The Essential Man" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 p-4 text-white">
        <h2 className="text-lg md:text-xl font-semibold uppercase tracking-wider ml-8">STRICTLY LUXURIOUS</h2>
        <h1 className="text-2xl md:text-4xl font-bold ml-8 mt-2">The Essential Man</h1>
        <p className="text-sm md:text-base ml-8 mt-2">A Suit of value to your closet</p>
        <div className="ml-8 mt-4">
          <button className="text-white bg-transparent hover:bg-white hover:text-black transition-colors rounded-full p-3 border border-white flex items-center justify-center">
            {/* Updated size to "2x" for better visibility */}
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
