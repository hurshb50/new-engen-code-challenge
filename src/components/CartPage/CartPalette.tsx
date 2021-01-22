import React from 'react';
import styled from "styled-components";
import { ColorData } from '../../api/Queries';
import CartPaletteItem from "./CartPaletteItem";

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
`;

interface Props {
  colors: ColorData[];
  removeFromCart: (color: ColorData) => void;
}

const CartPalette = (props: Props) => {
  const { colors, removeFromCart } = props;

  return (
    <Container>
      {colors.map((color: ColorData) => {
        return (
          <CartPaletteItem
            key={color.id}
            color={color}
            removeFromCart={removeFromCart}
          />
        )
      })}
    </Container>
  );
};

export default CartPalette;