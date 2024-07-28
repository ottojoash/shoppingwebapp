'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  _id: string;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const NewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item: Product) => {
    console.log('Added to cart:', item.title); // Replace this with your cart handling logic.
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">Best Sellers</h2>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 py-4">
        {products.map((item, index) => (
          <div key={index} className="shrink-0">
            <ProductCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              onAddToCart={() => handleAddToCart(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
