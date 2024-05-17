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
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg border rounded-lg">
      <img src={img} alt="Candle" className="h-full w-full object-cover"/>
    </div>
  );
};

// Main component to display all candle products
const CandleProducts: React.FC = () => {
  return (
    <div className="flex justify-center w-full"> {/* Center alignment for the container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl"> {/* Added max width to match the banner */}
        {candleProducts.map((product, index) => (
          <CandleProductCard key={index} img={product.img} />
        ))}
      </div>
    </div>
  );
};

export default CandleProducts;
