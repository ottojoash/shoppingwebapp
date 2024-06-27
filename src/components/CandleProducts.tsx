import React from 'react';
import Link from 'next/link';

interface ClothingProduct {
  img: string;
  name: string;
}

const clothingProducts: ClothingProduct[] = [
  {
    img: "/suit.jpg",
    name: "Suit",
  },
  {
    img: "/kaftan.jpg",
    name: "Kaftan",
  },
  {
    img: "/shirt.jpg",
    name: "Shirt",
  },
  {
    img: "/trouser.jpg",
    name: "Trouser",
  }
];

interface ClothingProductCardProps {
  img: string;
  name: string;
}

const ClothingProductCard: React.FC<ClothingProductCardProps> = ({ img, name }) => {
  return (
    <Link href={`/category/${name.toLowerCase()}`} legacyBehavior>
      <a>
        <div className="flex-none w-[90px] h-[130px] sm:w-[150px] sm:h-[180px] p-2 cursor-pointer">
          <img src={img} alt={name} className="h-3/4 w-full object-cover"/>
          <div className="text-center mt-1 font-semibold">{name}</div>
        </div>
      </a>
    </Link>
  );
};

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
