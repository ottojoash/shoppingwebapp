import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  originalPrice: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price, originalPrice, onAddToCart }) => {
  return (
    <div className="product-card bg-white p-4 shadow rounded-lg">
      <Link href={`/product/${title.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
        <a>
          <Image src={img} alt={title} width={300} height={300} className="w-full h-48 object-cover mb-2" />
        </a>
      </Link>
      <div className="product-info text-center">
        <h3 className="text-lg font-semibold text-pink-500">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
        <div className="rating flex justify-center my-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.176 0l-3.357 2.444c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.186 9.384c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>
        <div className="text-lg font-semibold text-blue-600 mb-2">
          {price} <span className="line-through text-gray-500 ml-2">{originalPrice}</span>
        </div>
        <button onClick={onAddToCart} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
