import React from 'react';
import styled from "styled-components";
import { ColorData } from '../../../hooks/useColorList';
import { ColorBlock } from '../../GeneralComponents';

const SelectableColorBlock = styled(ColorBlock) <{ selected: boolean }>`
  border: ${({ selected }) => (selected ? "0.5rem solid rgba(0,0,0,0.5)" : "0")};
`;

interface Props {
  color: ColorData;
  selected: boolean;
  updateCart: (color: ColorData) => void;
}

const ColorListItem = (props: Props) => {
  const { color, selected, updateCart } = props;
  const updateItem = () => updateCart(color);

  return (
    <SelectableColorBlock
      backgroundColor={color.hex}
      onClick={updateItem}
      selected={selected}
    >
      #{color.hex}
    </SelectableColorBlock>
  );
};

export default ColorListItem;