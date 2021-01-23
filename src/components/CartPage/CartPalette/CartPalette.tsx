import React from 'react'
import styled from "styled-components";
import { Cart } from '../../../hooks/useCart';
import { ColorData } from '../../../hooks/useColorList';
import { Button, ColorsContainer, Input, PrimaryHeader, SecondaryHeader } from '../../GeneralComponents';
import CartPaletteItem from "./CartPaletteItem";

const SaveInput = styled(Input)`
  width: 29rem;
`;

const SaveButton = styled(Button)`
  display: inline-block;
`;

interface Props {
  cart: Cart;
  input: string;
  removeFromCart: (color: ColorData) => void;
  savePalette: () => void;
  setInput: (value: string) => void;
}

const CartPalette = (props: Props) => {
  const { input, setInput } = props;
  const { cart, removeFromCart, savePalette } = props;
  const colors = Object.values(cart);

  return (
    <>
      <PrimaryHeader>Your current color cart palette</PrimaryHeader>

      <ColorsContainer>
        {colors.map((color: ColorData) => (
          <CartPaletteItem
            key={color.id}
            color={color}
            removeFromCart={removeFromCart}
          />
        ))}
      </ColorsContainer>

      <SecondaryHeader>Name and save your color palette</SecondaryHeader>
      <SaveInput
        value={input}
        onChange={({ currentTarget }) => setInput(currentTarget.value)}
        placeholder="Color palette name"
      />
      <SaveButton onClick={savePalette}>Save Palette</SaveButton>
    </>
  )
}

export default CartPalette;
