import { useEffect, useState } from "react";
import { ColorData } from "./useColorList";


interface Cart {
  [id: number]: ColorData
}

interface CartProps {
  cart: Cart;
  addToCart: (color: ColorData) => void;
  updateCart: (color: ColorData) => void;
  removeFromCart: (color: ColorData) => void;
  clearCart: () => void;
}

const getStoredCart = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) return JSON.parse(storedCart);
  else return {};
}

const setStoredCart = (newCart: Cart) => localStorage.setItem('cart', JSON.stringify(newCart));

const useCart = (): CartProps => {
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    setCart(getStoredCart());
  }, []);

  const addToCart = (color: ColorData) => {
    const newCart = { ...cart, [color.id]: color };
    setStoredCart(newCart);
    setCart(newCart);
  };
  const removeFromCart = (color: ColorData) => {
    //separate color from others in the cart
    const { [color.id]: removedColor, ...newCart } = cart;
    setStoredCart(newCart);
    setCart(newCart);
  }

  const updateCart = (color: ColorData) => {
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
export type { Cart };