import React from 'react';
import styled from "styled-components";
import { Cart, ColorData } from '../../api/Queries';
import ListItem from './ListItem';

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
`;

interface Props {
  cart: Cart;
  colorDataList: ColorData[];
  updateCart: (color: ColorData) => void;
}

const ListView = (props: Props) => {
  const { cart, colorDataList, updateCart } = props;
  return (
    <Container>
      {colorDataList.map((color: ColorData) => {
        const selected = (cart[color.id] ? true : false);
        return (
          <ListItem
            key={color.id}
            color={color}
            selected={selected}
            updateCart={updateCart}
          />
        );
      })}
    </Container>
  );
};

export default ListView;