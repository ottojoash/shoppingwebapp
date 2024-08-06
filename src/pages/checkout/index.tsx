import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/components/CartProvider';

// Define the type for cart items
interface CartItem {
  item: number;
  name?: string; // Make name optional
  size: string;
  color: string;
  quantity: number;
  price: number; // Ensure price is number
  image?: string; // Make image optional
  amount: number;
}

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [items, setItems] = useState<CartItem[]>(cart.map(item => ({
    item: item.id,
    name: item.name, // Adjusted to match the type
    size: '',
    color: '',
    quantity: 1,
    price: item.price, // Ensure price is a number
    image: item.image,
    amount: 1,
  })));

  const handleInputChange = (index: number, field: keyof CartItem, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setItems(updatedItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      order: items, // Send the array of items
      username,
      phoneNumber, // Updated to phoneNumber to match the backend
      email,
    };

    try {
      const response = await fetch('http://localhost:3000/api/orders/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally redirect after submission
      router.push('/confirmation'); // Adjust to the confirmation page route
    } catch (error) {
      console.error('Error submitting the order:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-bold">Item: {item.name || 'Unknown'}</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Size:</label>
                <input
                  type="text"
                  value={item.size}
                  onChange={(e) => handleInputChange(index, 'size', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Color:</label>
                <input
                  type="text"
                  value={item.color}
                  onChange={(e) => handleInputChange(index, 'color', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Amount:</label>
                <input
                  type="number"
                  value={item.amount}
                  onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                  min="1"
                />
              </div>
            </div>
          ))
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telephone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
