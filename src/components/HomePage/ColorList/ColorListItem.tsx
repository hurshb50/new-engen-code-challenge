import React from 'react';
import styled from "styled-components";
import { Color } from '../../../hooks/dataTypes';
import { ColorBlock } from '../../GeneralComponents';

const SelectableColorBlock = styled(ColorBlock) <{ selected: boolean }>`
  border: ${({ selected }) => (selected ? "0.5rem solid rgba(0,0,0,0.5)" : "0")};
`;

interface Props {
  color: Color;
  selected: boolean;
  updateCart: (color: Color) => void;
}

const ColorListItem = (props: Props) => {
  const updateItem = () => props.updateCart(props.color);

  return (
    <SelectableColorBlock
      backgroundColor={props.color.hex}
      onClick={updateItem}
      selected={props.selected}
    >
      #{props.color.hex}
    </SelectableColorBlock>
  );
};

export default ColorListItem;