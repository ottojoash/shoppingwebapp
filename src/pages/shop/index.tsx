import React from 'react';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';

const products = [
  {
    name: "African child shirt",
    description: "Traditional African shirt for kids",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
    rating: 4,
    originalPrice: "Ush 200,000 UGX"
  },
  {
    name: "African child shirt",
    description: "Traditional African shirt for kids",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
    rating: 4,
    originalPrice: "Ush 200,000 UGX"
  },
  {
    name: "army green gurkha pant",
    description: "Comfortable army green pants",
    price: "Ush 200,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
    rating: 5,
    originalPrice: "Ush 250,000 UGX"
  },
  {
    name: "Banana kaftan suit",
    description: "Stylish banana-colored kaftan suit",
    price: "Ush 360,000 UGX",
    imageSrc: "https://via.placeholder.com/50", // Placeholder image
    rating: 4,
    originalPrice: "Ush 400,000 UGX"
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
            <div key={index} className="bg-white p-4 shadow rounded-lg">
              <img src={product.imageSrc} alt={product.name} className="w-12 h-12 object-cover mb-2 mx-auto" />
              <div className="text-center">
                <h3 className="text-md font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="rating flex justify-center mt-2 mb-2">
                  {[...Array(5)].map((star, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <div className="text-md font-semibold text-blue-600">
                  {product.price}
                  <span className="line-through text-gray-500 ml-2 text-sm">{product.originalPrice}</span>
                </div>
                <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
