import React from 'react';
import { Cart } from '../../../hooks/useCart';
import { ColorData } from '../../../hooks/useColorList';
import { ColorsContainer } from '../../GeneralComponents';
import ColorListItem from './ColorListItem';

interface Props {
  cart: Cart;
  colorDataList: ColorData[];
  updateCart: (color: ColorData) => void;
}

const ColorList = (props: Props) => {
  const { cart, colorDataList, updateCart } = props;

  return (
    <ColorsContainer>
      {colorDataList.map((color: ColorData) => {
        const selected = (cart[color.id] ? true : false);
        return (
          <ColorListItem
            key={color.id}
            color={color}
            selected={selected}
            updateCart={updateCart}
          />
        );
      })}
    </ColorsContainer>
  );
};

export default ColorList;