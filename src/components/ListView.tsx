import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import ColorItem from "./ColorItem";
import { ColorData } from '../api/Queries';
import { CartData } from '../App';

const ListViewContainer = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
`;

interface Props {
  cart: CartData;
  colorList: ColorData[];
  updateCart: (color: ColorData) => void;
}

const ListView = ({ cart, colorList, updateCart }: Props) => (
  <ListViewContainer>
    {colorList.map((colorData: ColorData) => (
      <ColorItem
        key={colorData.id}
        colorData={colorData}
        updateCart={updateCart}
        selected={(cart[colorData.id] ? true : false)}
      />
    ))}
  </ListViewContainer>
)

export default ListView;