import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/components/CartProvider';

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState(''); // Added email field
  const [status, setStatus] = useState('Pending');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderDetails, setOrderDetails] = useState(cart.map(item => ({
    id: item.id,
    color: '',
    size: '',
    quantity: 1,
  })));

  const handleOrderDetailChange = (index, field, value) => {
    const newOrderDetails = [...orderDetails];
    newOrderDetails[index][field] = value;
    setOrderDetails(newOrderDetails);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      order: orderDetails.map(detail => ({
        ...cart.find(item => item.id === detail.id),
        ...detail,
        amount: detail.quantity, // Ensuring 'amount' is included
        name: cart.find(item => item.id === detail.id).name, // Ensuring 'name' is included
        item: detail.id, // Ensuring 'item' is included
      })),
      username,
      address,
      telephone, // Ensuring 'telephone' is included
      email, // Ensuring 'email' is included
      status,
      paymentMethod,
    };

    try {
      await fetch('http://localhost:3000/api/orders/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      // Optionally redirect after submission
      // router.push('/confirmation'); // Adjust to the confirmation page route
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
          cart.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-700">Price: {item.price}</p>
              <div className="mb-4">
                <label className="block text-gray-700">Color:</label>
                <input
                  type="text"
                  value={orderDetails[index].color}
                  onChange={(e) => handleOrderDetailChange(index, 'color', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Size:</label>
                <input
                  type="text"
                  value={orderDetails[index].size}
                  onChange={(e) => handleOrderDetailChange(index, 'size', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity:</label>
                <input
                  type="number"
                  value={orderDetails[index].quantity}
                  onChange={(e) => handleOrderDetailChange(index, 'quantity', e.target.value)}
                  className="border p-2 w-full mt-1"
                  required
                />
              </div>
            </div>
          ))
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telephone Number:</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
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
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method:</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="mobile"
                checked={paymentMethod === 'mobile'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Mobile Money
            </label>
          </div>
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
