import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/components/CartProvider';

type Item = {
  item: number;
  name: string | undefined;
  category: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
};

const Checkout: React.FC = () => {
  const { cart, currency, convertPrice } = useCart();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [items, setItems] = useState(
    cart.map(item => ({
      item: item._id,
      name: item.title,
      category: item.category || '',
      size: '',
      color: '',
      quantity: 1,
      price: convertPrice(item.price),
      image: item.image,
    }))
  );

  const handleInputChange = (index: number, field: keyof Item, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      order: items,
      username,
      phoneNumber,
      email,
      currency,
      paymentMethod,
    };

    try {
      const response = await fetch('https://backendshop-9nf6.onrender.com/api/orders/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      router.push('/'); // Adjust to the confirmation page route
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
              <h2 className="text-lg font-bold">Item: {item.name}</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Category:</label>
                <input
                  type="text"
                  value={String(item.category)}
                  disabled
                  className="border p-2 w-full mt-1"
                />
              </div>
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
                <label className="block text-gray-700">Price ({currency}):</label>
                <input
                  type="text"
                  value={item.price}
                  disabled
                  className="border p-2 w-full mt-1"
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

        {/* Payment Method Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Payment Method:</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Cash</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Online Pay</span>
            </label>
          </div>
        </div>

        {/* Conditionally render the submit button */}
        {paymentMethod && (
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Submit Order
          </button>
        )}
      </form>
    </div>
  );
};

export default Checkout;
