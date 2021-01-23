import React from 'react'
import styled from "styled-components";
import { ColorBlock } from '../../GeneralComponents';
import { ColorData } from '../../../hooks/useColorList';
import Trash from "../../../assets/TrashIcon.svg";

const RemovableColorBlock = styled(ColorBlock)`
  position: relative;
  
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


interface Props {
  color: ColorData;
  removeFromCart: (color: ColorData) => void;
}

const CartPaletteItem = (props: Props) => {
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
