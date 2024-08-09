import { useCart } from "@/components/CartProvider";
import CartHeader from "./cartHeader";
import { useRouter } from "next/router";

const Cart: React.FC = () => {
  const { cart, removeFromCart, currency, changeCurrency, convertPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    console.log("Proceed to checkout");
    router.push('/checkout');
  };

  return (
    <div>
      <CartHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="mb-4">
          <label className="mr-2">Currency:</label>
          <select value={currency} onChange={(e) => changeCurrency(e.target.value)} className="border p-2">
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
          </select>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div key={item._id} className="bg-white p-4 shadow rounded-lg flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Category: {item.category}</p>
                  <div className="text-md text-blue-600">{convertPrice(item.price)} {currency}</div>
                </div>
                <button
                  className="text-red-600 hover:underline ml-4"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
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
