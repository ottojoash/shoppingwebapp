import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  category: ReactNode;
  id: number;
  name: string; // Ensure name is included
  description: string;
  rating: number;
  price: number; // Numeric type
  originalPrice: number;
  image: string;
  title?: string;
  type?: string;
  selectedColor?: string; // Optional property
  selectedSize?: string;  // Optional property
  imageSrc?: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  currency: string;
  changeCurrency: (newCurrency: string) => void;
  convertPrice: (price: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [currency, setCurrency] = useState<string>('USD'); // default currency

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const changeCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const convertPrice = (price: number) => {
    if (currency === 'UGX') {
      // Assume conversion rate of 1 USD = 3700 UGX
      return price * 3700;
    }
    return price;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, currency, changeCurrency, convertPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
