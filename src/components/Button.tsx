import styled from "styled-components";

const Button = styled.button<{ alignment: string }>`
  ${({ alignment }) => (alignment === "center" ?
    "align-self: center;"
    :
    "display: inline-block;"
  )}

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

export default Button;