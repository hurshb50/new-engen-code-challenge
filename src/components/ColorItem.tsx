import React from 'react';
import styled from "styled-components";
import { ColorData } from "../api/Queries";

interface ColorItemContainerProps {
  backgroundColor: string;
  selected: boolean;
}

const ColorItemContainer = styled.div<ColorItemContainerProps>`
  height: 12.2rem;
  width: 12.2rem;

  border: ${({ selected }) => (selected ? "0.5rem solid rgba(0,0,0,0.5)" : "0")};
  border-radius: 0.4rem;

  background-color: ${({ backgroundColor }) => `#${backgroundColor}`};
  margin: 1rem;

  display: flex;
  justify-content:center;
  align-items:center;
  color: ${({ backgroundColor }) => (backgroundColor === "FFFFFF" ? "black" : "#ffffff")};
  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;

  user-select: none;
`;

interface Props {
  colorData: ColorData;
  selected: boolean;
  updateCart: (color: ColorData) => void;
}

const ColorItem = (props: Props) => {
  const { hex } = props.colorData;

  const onItemClick = () => props.updateCart(props.colorData);

  return (
    <ColorItemContainer onClick={onItemClick} backgroundColor={hex} selected={props.selected}>#{hex}</ColorItemContainer>
  );
};

export default ColorItem;