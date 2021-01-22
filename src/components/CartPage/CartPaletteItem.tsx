import React from 'react';
import styled from "styled-components";
import { ColorData } from '../../api/Queries';
import Trash from "../../assets/TrashIcon.svg";

const Container = styled.div<{ backgroundColor: string; }>`
  height: 12.2rem;
  width: 12.2rem;
  
  border-radius: 0.4rem;

  background-color: ${({ backgroundColor }) => `#${backgroundColor}`};

  margin: 1rem;

  position:relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    & img {
      visibility: visible;
    }
  }
`;

const ContainerText = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;

  user-select: none;
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
    <Container backgroundColor={hex}>
      <ContainerText>#{hex}</ContainerText>
      <TrashIcon src={Trash} onClick={removeItem} />
    </Container>
  );
};

export default CartPaletteItem;