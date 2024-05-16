import { useRouter } from 'next/router';
import React from 'react';

const ProductDescription: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;

  // Assuming you have some way to fetch the product details by title.
  // For simplicity, you can use static data or fetch from an API.
  const product = {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <img src={product.img} alt={product.title} className="w-full h-auto mb-4" />
      <p>{product.desc}</p>
      <div>Rating: {product.rating}</div>
      <div>Price: ${product.price}</div>
    </div>
  );
};

export default ProductDescription;
