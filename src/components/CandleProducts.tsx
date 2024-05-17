import React from 'react';

// Define the type for a single candle product
interface CandleProduct {
  img: string;
}

// Array of candle products with placeholder images
const candleProducts: CandleProduct[] = [
  {
    img: "https://via.placeholder.com/300x300?text=Amber+Apothecary",
  },
  {
    img: "https://via.placeholder.com/300x300?text=Gold+Travel+Candles",
  },
  {
    img: "https://via.placeholder.com/300x300?text=A+Walk+in+the+Woods",
  }
];

// Props definition for the CandleProductCard component
interface CandleProductCardProps {
  img: string;
}

// Single candle product card component
const CandleProductCard: React.FC<CandleProductCardProps> = ({ img }) => {
  return (
    <div className="flex-none w-1/3 p-4 bg-white shadow-lg border rounded-lg" style={{ height: '300px' }}>
      <img src={img} alt="Candle" className="h-full w-full object-cover"/>
    </div>
  );
};

// Main component to display all candle products
const CandleProducts: React.FC = () => {
  return (
    <div className="flex justify-center w-full overflow-x-auto px-4 sm:px-6 lg:px-8">
      <div className="flex space-x-4 min-w-max"> {/* Use flex and min-w-max to enable horizontal scrolling */}
        {candleProducts.map((product, index) => (
          <CandleProductCard key={index} img={product.img} />
        ))}
      </div>
    </div>
  );
};

export default CandleProducts;
