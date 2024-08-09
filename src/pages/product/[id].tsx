import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import ShopHeader from '../shop/shopheader';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://backendshop-9nf6.onrender.com/api/shop/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ShopHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image src={product.image} alt={product.title} width={500} height={500} className="object-cover" />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <div className="text-xl font-semibold">${product.price}</div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart({
                  _id: product._id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                  description: product.description,
                  category: undefined,
                  rating: 0,
                  originalPrice: 0
              })}
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
