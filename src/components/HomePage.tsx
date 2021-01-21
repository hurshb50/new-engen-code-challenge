import React, { useState } from 'react';
import styled from "styled-components";
import { CartData } from "../App";
import ListView from "./ListView";
import { ColorData, useColorList } from '../api/Queries';

const HomePageContainer = styled.div`
  display:flex;
  flex-direction:column;
`;

const LoadColorButton = styled.button`
  align-self: center;

  height: 4rem;
  width: 12rem;
  border-radius: 2.2rem;

  margin: 1rem 0;

  border: none;
  outline: none;
  
  background-color: #1E4091;

  font-size: 1.4rem;
  font-weight: 400;
  color: #ffffff;
`;

interface Props {
  updateCart: (color: ColorData) => void;
  cart: CartData;
}

const HomePage = ({ cart, updateCart }: Props) => {
  const [numColors, setNumColors] = useState(0);
  const incNumColors = () => setNumColors(prevNumColors => prevNumColors + 20);

  const { colorList, loading, error } = useColorList(numColors);

  if (error) console.log(error);

  return (
    <HomePageContainer>
      {(colorList.length > 0 ? (<ListView cart={cart} colorList={colorList} updateCart={updateCart} />) : null)}

      <LoadColorButton onClick={incNumColors} disabled={(numColors >= 100 || loading ? true : false)}>
        Load More
      </LoadColorButton>

    </HomePageContainer>
  );
};

export default HomePage;