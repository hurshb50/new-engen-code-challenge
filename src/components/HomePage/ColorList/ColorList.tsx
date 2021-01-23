import React from 'react';
import { Cart, Color } from '../../../hooks/dataTypes';
import { ColorsContainer } from '../../GeneralComponents';
import ColorListItem from './ColorListItem';

interface ComponentProps {
  cart: Cart;
  colorList: Color[];
  updateCart: (color: Color) => void;
}

const ColorList = (props: ComponentProps) => {
  const { cart, colorList, updateCart } = props;

  return (
    <ColorsContainer>
      {colorList.map((color: Color) => {
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