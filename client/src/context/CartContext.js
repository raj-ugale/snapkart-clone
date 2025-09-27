// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity +1 }
          : item
      );
    } else {
        return [...prevCart, { ...product, quantity: 1}];
      }
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);