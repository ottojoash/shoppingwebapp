import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HeaderTop from '@/components/HeaderTop';
import ShopHeader from '../shop/shopheader';
import { useCart } from '@/components/CartProvider';

const products = [
  {
    id: 1,
    name: "African child shirt",
    description: "Traditional African shirt for kids",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    rating: 4,
    originalPrice: "Ush 200,000 UGX",
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 2,
    name: "African child shirt",
    description: "Traditional African shirt for kids",
    price: "Ush 180,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    rating: 4,
    originalPrice: "Ush 200,000 UGX",
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 3,
    name: "army green gurkha pant",
    description: "Comfortable army green pants",
    price: "Ush 200,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    rating: 5,
    originalPrice: "Ush 250,000 UGX",
    colors: ["Green"],
    sizes: ["M", "L"]
  },
  {
    id: 4,
    name: "Banana kaftan suit",
    description: "Stylish banana-colored kaftan suit",
    price: "Ush 360,000 UGX",
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    rating: 4,
    originalPrice: "Ush 400,000 UGX",
    colors: ["Banana"],
    sizes: ["S", "M", "L"]
  },
];

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id as string));
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <HeaderTop />
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 shadow rounded-lg">
          <img src={product.imageSrc} alt={product.name} className="w-48 h-48 object-cover mb-4 mx-auto" />
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <p className="text-md text-gray-500 mb-4">{product.description}</p>
            <div className="rating flex justify-center mt-2 mb-4">
              {[...Array(5)].map((star, i) => (
                <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <div className="text-lg font-semibold text-blue-600 mb-4">
              {product.price}
              <span className="line-through text-gray-500 ml-2">{product.originalPrice}</span>
            </div>
            <div className="mb-4">
              <p className="text-md font-semibold mb-2">Select Color:</p>
              {product.colors.map((color, index) => (
                <label key={index} className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                    className="form-radio"
                  />
                  <span className="ml-2">{color}</span>
                </label>
              ))}
            </div>
            <div className="mb-4">
              <p className="text-md font-semibold mb-2">Select Size:</p>
              {product.sizes.map((size, index) => (
                <label key={index} className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    className="form-radio"
                  />
                  <span className="ml-2">{size}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart({ ...product, selectedColor, selectedSize })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
