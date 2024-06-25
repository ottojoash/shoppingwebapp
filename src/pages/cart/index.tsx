import React from 'react';
import Link from 'next/link';
import CartHeader from './cartHeader';
import HeaderTop from '@/components/HeaderTop';

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "African child shirt",
      price: "Ush 180,000 UGX",
      quantity: 1,
      imageSrc: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      id: 2,
      name: "army green gurkha pant",
      price: "Ush 200,000 UGX",
      quantity: 2,
      imageSrc: "https://via.placeholder.com/150", // Placeholder image
    },
  ];

  const handleRemoveItem = (id: number) => {
    console.log(`Remove item with id ${id}`);
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  return (
    <div>
    <HeaderTop/>
    <CartHeader/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow rounded-lg flex items-center">
              <img src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className="flex-grow">
                <h3 className="text-md font-semibold">{item.name}</h3>
                <div className="text-md text-blue-600">{item.price}</div>
                <div className="text-md">Quantity: {item.quantity}</div>
              </div>
              <button
                className="text-red-600 hover:underline ml-4"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
