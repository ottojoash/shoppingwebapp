import React from 'react';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';

const products = [
  {
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
  },
  {
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
  },
  {
    name: "army green gurkha pant",
    price: "Ush 200,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
  },
  {
    name: "Banana kaftan suit",
    price: "Ush 360,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
  },
];

const Shop: React.FC = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={product.imageSrc} alt={product.name} className="w-12 h-12 object-cover mx-auto mt-4" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
