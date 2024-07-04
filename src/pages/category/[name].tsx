import { useRouter } from 'next/router';
import  ClothingProduct  from '../../components/CandleProducts'; // Adjust the path if necessary

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  const product = ClothingProduct.find((product: { name: string; }) => product.name.toLowerCase() === name);

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
