import React from 'react';
import styled from "styled-components";
import { ColorData } from '../../api/Queries';

interface ContainerProps {
  backgroundColor: string;
  selected: boolean;
}

const Container = styled.div<ContainerProps>`
  height: 12.2rem;
  width: 12.2rem;

  border: ${({ selected }) => (selected ? "0.5rem solid rgba(0,0,0,0.5)" : "0")};
  border-radius: 0.4rem;

  background-color: ${({ backgroundColor }) => `#${backgroundColor}`};

  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const ContainerText = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;

  user-select: none;
`;

interface Props {
  color: ColorData;
  selected: boolean;
  updateCart: (color: ColorData) => void;
}

const ListItem = (props: Props) => {
  const { color, selected, updateCart } = props;
  const { hex } = color;

  const updateItem = () => updateCart(color);

  return (
    <Container
      backgroundColor={hex}
      onClick={updateItem}
      selected={selected}
    >
      <ContainerText>#{hex}</ContainerText>
    </Container>
  );
};

export default ListItem;