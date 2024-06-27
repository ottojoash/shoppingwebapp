import { useRouter } from 'next/router';
import React from 'react';
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import ShopHeader from '../shop/shopheader';

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  // Fetch products based on category name
  // const products = fetchProductsByCategory(name);

  return (
    <div>
      <HeaderTop />
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 capitalize">{name}</h1>
        {/* Render products for this category */}
        <div className="grid grid-cols-2 gap-4">
          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
