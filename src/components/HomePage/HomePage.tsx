import React, { FunctionComponent, useState } from 'react';
import styled from "styled-components";
import { Button, Input } from '../GeneralComponents';

const LoadMoreContainer = styled.div`
  display:flex;
  justify-content: center;
`;

interface ComponentProps {
  isDataLoading: boolean;
  loadMoreColors: (quantity: number) => void;
}

const HomePage: FunctionComponent<ComponentProps> = (props) => {
  const [quantity, setQuantity] = useState(0);

  const loadMoreColors = () => {
    if (!Number.isNaN(quantity) && quantity > 0 && quantity <= 100)
      props.loadMoreColors(quantity);
  }

  return (
    <>
      {props.children}

      <LoadMoreContainer>
        <Input
          type="number"
          value={quantity}
          onChange={({ currentTarget }) => setQuantity(parseInt(currentTarget.value))}
          width={10}
        />
        <Button disabled={props.isDataLoading} onClick={loadMoreColors} display="block">
          Load More
        </Button>
      </LoadMoreContainer>
    </>
  );
}

export default HomePage;