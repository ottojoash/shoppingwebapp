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
const CandleProductCard: React.FC<CandleProductCardProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg border rounded-lg" style={{ width: '150px', height: '150px' }}>
      <img src={img} alt={title} className="h-full w-full object-cover"/>
      <h3 className="text-lg font-semibold absolute bottom-4 bg-white bg-opacity-75 w-full text-center">{title}</h3>
    </div>
  );
};

// Main component to display all candle products
const CandleProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-8">  {/* Confirm the gap and grid columns here */}
        {candleProducts.map((product, index) => (
          <CandleProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CandleProducts;
