import React from 'react';
import suit from '../../public/suit.jpg'
// Define the type for a single clothing product
interface ClothingProduct {
  img: string;
  name: string;
}

// Array of clothing products with images and names
const clothingProducts: ClothingProduct[] = [
  {
    img: "/suit.jpg", // Path relative to the public directory
    name: "Suit",
  },
  {
    img: "/kaftan.jpg", // Replace with the actual path if you have the image in the public directory
    name: "Kaftan",
  },
  {
    img: "/shirt.jpg", // Replace with the actual path if you have the image in the public directory
    name: "Shirt",
  },
  {
    img: "/trouser.jpg", // Replace with the actual path if you have the image in the public directory
    name: "Trouser",
  }
];

// Props definition for the ClothingProductCard component
interface ClothingProductCardProps {
  img: string;
  name: string;
}

// Single clothing product card component
const ClothingProductCard: React.FC<ClothingProductCardProps> = ({ img, name }) => {
  return (
    <div className="flex-none w-[90px] h-[130px] sm:w-[150px] sm:h-[180px] p-2">
      <img src={img} alt={name} className="h-3/4 w-full object-cover"/>
      <div className="text-center mt-1 font-semibold">{name}</div> {/* Name displayed below the image */}
    </div>
  );
};

// Main component to display all clothing products
const ClothingProducts: React.FC = () => {
  return (
    <div className="flex justify-center w-full overflow-x-auto px-2 sm:px-4 lg:px-8 mt-9 mb-4">
      <div className="flex space-x-2 sm:space-x-4 min-w-max">
        {clothingProducts.map((product, index) => (
          <ClothingProductCard key={index} img={product.img} name={product.name} />
        ))}
      </div>
    </div>
  );
};

export default ClothingProducts;
