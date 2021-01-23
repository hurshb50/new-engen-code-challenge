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
  const [quantity, setQuantity] = useState("");

  const loadMoreColors = () => {
    const parsedQuantity = (Number.isNaN(parseInt(quantity)) ? 0 : parseInt(quantity));
    if (parsedQuantity > 0 && parsedQuantity <= 100) props.loadMoreColors(parsedQuantity);
  }

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (!Number.isNaN(parseInt(value))) setQuantity(value);
    else setQuantity("");
  }

  return (
    <>
      {props.children}

      <LoadMoreContainer>
        <Input
          type="text"
          value={quantity}
          onChange={onQuantityChange}
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