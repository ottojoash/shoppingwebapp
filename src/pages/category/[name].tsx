import { useRouter } from 'next/router';

// Define your product type
interface Product {
  name: string;
  img: string;
  // Add other product fields here
}

// Import or define your product array
const ClothingProducts: Product[] = [
  // Sample data
  { name: 'T-Shirt', img: '/images/tshirt.png' },
  { name: 'Jeans', img: '/images/jeans.png' },
  // Add more products here
];

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  if (typeof name !== 'string') {
    return <div>Invalid product name</div>;
  }

  // Find the product based on name
  const product = ClothingProducts.find((product) =>
    product.name.toLowerCase() === name.toLowerCase()
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
