import React, { useState } from 'react';
import { Cart } from '../../hooks/useCart';
import CartPalette from './CartPalette/CartPalette';
import { ColorData } from '../../hooks/useColorList';
import StoredPalettes from './StoredPalettes/StoredPalettes';
import useStoredPalettes from '../../hooks/useStoredPalettes';

interface Props {
  cart: Cart;
  clearCart: () => void;
  removeFromCart: (color: ColorData) => void;
}

const CartPage = (props: Props) => {
  const [input, setInput] = useState("");
  const [palettes, addPalette, removePalette] = useStoredPalettes(props.cart, input);

  const savePalette = () => {
    if (input !== "" && Object.keys(props.cart).length > 0) {
      addPalette();
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