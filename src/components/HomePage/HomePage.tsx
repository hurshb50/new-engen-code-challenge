import React, { FunctionComponent, useState } from 'react';
import styled from "styled-components";
import { Button, Input } from '../GeneralComponents';

const LoadContainer = styled.div`
  display:flex;
  justify-content: center;
`;

const LoadInput = styled(Input)`
  width: 10rem;
`;

interface Props {
  colorOffset: number;
  loadMoreColors: (quantity: number) => void;
  isDataLoading: boolean;
}

const HomePage: FunctionComponent<Props> = (props) => {
  const [quantity, setQuantity] = useState(0);

  const loadMoreColors = () => {
    if (quantity > 0 && !Number.isNaN(quantity)) props.loadMoreColors(quantity);
  }

  return (
    <>
      {props.children}
      <LoadContainer>
        <LoadInput type="number" value={quantity} onChange={({ currentTarget }) => setQuantity(parseInt(currentTarget.value))} />
        <Button
          disabled={props.isDataLoading}
          onClick={loadMoreColors}
        >
          Load More
        </Button>
      </LoadContainer>
    </>
  );
}

export default HomePage;