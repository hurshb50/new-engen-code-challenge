import styled from "styled-components";

const Button = styled.button`
  height: 4rem;
  width: 12rem;
  border-radius: 2.2rem;

  margin: 1rem;

  border: none;
  outline: none;
  
  background-color: #1E4091;

  font-size: 1.4rem;
  font-weight: 400;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    background-color: #19367b; 
  }
`;

const ColorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ColorBlock = styled.div<{ backgroundColor: string }>`
  height: 12.2rem;
  width: 12.2rem;
  
  border-radius: 0.4rem;

  background-color: ${({ backgroundColor }) => `#${backgroundColor}`};

  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;

  user-select: none;
`;

const Input = styled.input`
  height: 4rem;

  border: none;
  border-radius: 0.5rem;
  
  margin: 1rem;
  
  text-indent: 1rem;
  font-size: 1.6rem;

  &::placeholder {
    color: #d5d5d5;
  }
`;

const PrimaryHeader = styled.h1`
  margin: 1rem;
`;

const SecondaryHeader = styled.h2`
  margin: 1rem;
`;

export { Button, ColorBlock, ColorsContainer, Input, PrimaryHeader, SecondaryHeader };