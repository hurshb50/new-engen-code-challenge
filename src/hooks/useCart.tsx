import { useEffect, useState } from "react";
import { Cart, Color } from "./dataTypes";

interface useCartReturnProps {
  cart: Cart;
  addToCart: (color: Color) => void;
  updateCart: (color: Color) => void;
  removeFromCart: (color: Color) => void;
  clearCart: () => void;
}

const useCart = (): useCartReturnProps => {
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    setCart(getStoredCart());
  }, []);

  const addToCart = (color: Color) => {
    const newCart = { ...cart, [color.id]: color };
    setStoredCart(newCart);
    setCart(newCart);
  };
  const removeFromCart = (color: Color) => {
    //separate color from others in the cart
    const { [color.id]: removedColor, ...newCart } = cart;
    setStoredCart(newCart);
    setCart(newCart);
  }

  const updateCart = (color: Color) => {
    // if color is not in cart yet, add it
    if (!cart[color.id]) addToCart(color);
    //else remove it
    else removeFromCart(color);
  }

  const clearCart = () => {
    setStoredCart({});
    setCart({});
  };

  return { cart, addToCart, updateCart, removeFromCart, clearCart };
}

export default useCart;

// get/set cart from/to localStorage

const getStoredCart = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) return JSON.parse(storedCart);
  else return {};
}

const setStoredCart = (newCart: Cart) => localStorage.setItem('cart', JSON.stringify(newCart));