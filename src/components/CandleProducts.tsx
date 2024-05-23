import React from 'react';

// Define the type for a single clothing product
interface ClothingProduct {
  img: string;
  name: string;
}

// Array of clothing products with images and names
const clothingProducts: ClothingProduct[] = [
  {
    img: "https://via.placeholder.com/300x300?text=Suit",
    name: "Suit",
  },
  {
    img: "https://via.placeholder.com/300x300?text=Kaftan",
    name: "Kaftan",
  },
  {
    img: "https://via.placeholder.com/300x300?text=Shirt",
    name: "Shirt",
  },
  {
    img: "https://via.placeholder.com/300x300?text=Trouser",
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
    <div className="flex-none w-[90px] h-[130px] sm:w-[150px] sm:h-[180px] p-2 bg-white shadow-lg border rounded-lg">
      <img src={img} alt={name} className="h-3/4 w-full object-cover rounded-t-lg"/>
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
