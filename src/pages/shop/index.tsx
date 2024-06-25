import React from 'react';
import Link from 'next/link';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import ShopHeader from './shopheader';

const products = [
  {
    id: 1,
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 2,
    name: "African child shirt",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 3,
    name: "army green gurkha pant",
    price: "Ush 200,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 4,
    name: "Banana kaftan suit",
    price: "Ush 360,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const Shop: React.FC = () => {
  return (
    <div>
      <HeaderTop />
      {/* <HeaderMain /> */}
      <ShopHeader/>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} passHref>
              <div className="bg-white p-4 shadow rounded-lg cursor-pointer">
                <img src={product.imageSrc} alt={product.name} className="w-full h-50 object-cover mb-2" />
                <div className="text-center">
                  <h3 className="text-md font-semibold">{product.name}</h3>
                  <div className="text-md font-semibold text-blue-600">{product.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
