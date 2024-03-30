// CartContext.js
import React, { createContext, useState } from 'react';
import dummyData from './dummyData.json'; // Import the dummy data

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart with an empty array

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartContext = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    products: dummyData.products, // Add the dummy data to the context
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};