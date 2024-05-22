import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      <img src="/banner-2.jpg" alt="The Essential Man" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 text-white">
        <h2 className="text-lg md:text-xl font-semibold">STRICTLY LUXURIOUS</h2>
        <h1 className="text-2xl md:text-4xl font-bold">The Essential Man</h1>
        <p className="text-base md:text-lg">A Suit of value to your closet</p>
        <button className="btn btn-primary mt-4">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
