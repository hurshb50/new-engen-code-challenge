import React from 'react'
import styled from "styled-components";
import { Color } from '../../../hooks/dataTypes';
import { ColorBlock } from '../../GeneralComponents';
import Trash from "../../../assets/TrashIcon.svg";

const RemovableColorBlock = styled(ColorBlock)`
  position: relative;
  cursor: pointer;
  
  &:hover {
    & img {
      visibility: visible;
    }
  }
`;

const TrashIcon = styled.img`
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  margin: 0.5rem;
`;

interface ComponentProps {
  color: Color;
  removeFromCart: (color: Color) => void;
}

const CartPaletteItem = (props: ComponentProps) => {
  const { color, removeFromCart } = props;
  const { hex } = color;

  const removeItem = () => removeFromCart(color);

  return (
    <RemovableColorBlock backgroundColor={hex}>
      #{hex}
      <TrashIcon src={Trash} onClick={removeItem} />
    </RemovableColorBlock>
  );
}

export default CartPaletteItem
