import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import ShopHeader from '../shop/shopheader';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>('all'); // Track selected category

  // Fetch products based on selected category
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://backendshop-9nf6.onrender.com/api/shop/products?category=${category}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [category]); // Re-fetch when category changes

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!product || product.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ShopHeader />

      {/* Category filter buttons */}
      <div className="flex space-x-4 mb-8">
        <button onClick={() => setCategory('all')} className="px-4 py-2 bg-gray-200 rounded">
          All
        </button>
        <button onClick={() => setCategory('suits')} className="px-4 py-2 bg-gray-200 rounded">
          Suits
        </button>
        <button onClick={() => setCategory('shirts')} className="px-4 py-2 bg-gray-200 rounded">
          Shirts
        </button>
        <button onClick={() => setCategory('shoes')} className="px-4 py-2 bg-gray-200 rounded">
          Shoes
        </button>
        {/* Add more categories as needed */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {product.map((item: any) => (
          <div key={item._id} className="flex flex-col items-center">
            <Image src={item.image} alt={item.title} width={500} height={500} className="object-cover" />
            <div className="text-center mt-4">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-lg">{item.description}</p>
              <div className="text-xl font-semibold">${item.price}</div>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart({
                  _id: item._id,
                  name: item.title,
                  price: item.price,
                  image: item.image,
                  description: item.description,
                  category: item.category,
                  rating: item.rating || 0,
                  originalPrice: item.originalPrice || 0,
                })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
