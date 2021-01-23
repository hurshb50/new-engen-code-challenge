import React, { useState } from 'react';
import { Cart, Color } from '../../hooks/dataTypes';
import CartPalette from './CartPalette/CartPalette';
import StoredPalettes from './StoredPalettes/StoredPalettes';
import usePalettes from '../../hooks/usePalettes';

interface ComponentProps {
  cart: Cart;
  clearCart: () => void;
  removeFromCart: (color: Color) => void;
}

const CartPage = (props: ComponentProps) => {
  const [input, setInput] = useState("");
  const { palettes, addPalette, removePalette } = usePalettes();

  const savePalette = () => {
    if (input !== "" && Object.keys(props.cart).length > 0) {
      addPalette(props.cart, input);
      setInput("");
      props.clearCart();
    }
  }

  return (
    <>
      <CartPalette
        cart={props.cart}
        input={input}
        removeFromCart={props.removeFromCart}
        setInput={setInput}
        savePalette={savePalette}
      />

      {(Object.keys(palettes).length !== 0 ? (
        <StoredPalettes palettes={palettes} removePalette={removePalette} />
      ) : null)}
    </>
  );
};

export default CartPage;