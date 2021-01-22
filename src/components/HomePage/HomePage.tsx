import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

interface Props {
  colorOffset: number;
  incOffset: () => void;
  loading: boolean;
}

const HomePage: FunctionComponent<Props> = (props) => {
  const { colorOffset, incOffset, loading } = props;

  return (
    <Container>
      {props.children}

      <Button
        alignment="center"
        onClick={incOffset}
        disabled={(colorOffset >= 100 || loading ? true : false)}
      >
        Load More
      </Button>
    </Container>
  );
};

export default HomePage;