import React from 'react'
import { Cart, Color } from '../../../hooks/dataTypes';
import { Button, ColorsContainer, Input, PrimaryHeader, SecondaryHeader } from '../../GeneralComponents';
import CartPaletteItem from "./CartPaletteItem";

interface ComponentProps {
  cart: Cart;
  input: string;
  removeFromCart: (color: Color) => void;
  savePalette: () => void;
  setInput: (value: string) => void;
}

const CartPalette = (props: ComponentProps) => {
  const { input, setInput } = props;
  const { cart, removeFromCart, savePalette } = props;
  const colors = Object.values(cart);

  return (
    <>
      <PrimaryHeader>Your current color cart palette</PrimaryHeader>

      <ColorsContainer>
        {colors.map((color: Color) => (
          <CartPaletteItem
            key={color.id}
            color={color}
            removeFromCart={removeFromCart}
          />
        ))}
      </ColorsContainer>

      <SecondaryHeader>Name and save your color palette</SecondaryHeader>
      <Input
        value={input}
        onChange={({ currentTarget }) => setInput(currentTarget.value)}
        placeholder="Color palette name"
        width={29}
      />
      <Button onClick={savePalette} display="inline-block">Save Palette</Button>
    </>
  )
}

export default CartPalette;
