import React from "react";

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price, onAddToCart }) => {
  return (
    <div className="product-card bg-white p-4 shadow rounded">
      <img src={img} alt={title} className="w-full h-48 object-cover mb-2" />
      <div className="product-info">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{desc}</p>
        <div className="rating">Rating: {rating}</div>
        <div className="price">${price}</div>
        <button onClick={onAddToCart} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
