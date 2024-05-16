import React from 'react';

// Define the type for a single candle product
interface CandleProduct {
  img: string;
  title: string;
  desc: string;
}

// Array of candle products with placeholder images
const candleProducts: CandleProduct[] = [
  {
    img: "https://via.placeholder.com/300x300?text=Amber+Apothecary",
    title: "Amber Apothecary",
    desc: "Rich & earthy candle night"
  },
  {
    img: "https://via.placeholder.com/300x300?text=Gold+Travel+Candles",
    title: "Gold Travel Candles",
    desc: "Golden bliss of summer fragrances"
  },
  {
    img: "https://via.placeholder.com/300x300?text=A+Walk+in+the+Woods",
    title: "A Walk in the Woods",
    desc: "Forest, freshness, open magic"
  }
];

// Props definition for the CandleProductCard component
interface CandleProductCardProps {
  img: string;
  title: string;
  desc: string;
}

// Single candle product card component
const CandleProductCard: React.FC<CandleProductCardProps> = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg">
      <img src={img} alt={title} className="h-40 w-auto mb-2"/>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

// Main component to display all candle products
const CandleProducts: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="grid grid-cols-3 gap-4">
        {candleProducts.map((product, index) => (
          <CandleProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CandleProducts;
