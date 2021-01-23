import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/NewEngen-Logo.svg";
import Cart from "../assets/CartIcon.svg";

const Container = styled.header`
  height: 6rem;
  width: 100%;

  background-color: #1E4091;

  display: flex;
  justify-content: space-between;
  align-items:center;

  & img {
    height: 5rem;
    color: #FFFFFF;
  }
`;

const LogoImg = styled.img`
  margin-left: 1rem;
`;

const CartImgContainer = styled.div`
  position: relative;
  margin-right: 1rem;
`;

const CartBubble = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  
  height: 2.2rem;
  width:2.2rem;

  border-radius: 2.2rem;

  background-color:#F13757;

  font-size: 1.2rem;
  font-weight: 600;
  color: #FFFFFF;

  display:flex;
  justify-content:center;
  align-items:center;
`;

interface Props {
  cartSize: number;
}


const Nav = ({ cartSize }: Props) => {
  return (
    <Container>
      <Link to="/">
        <LogoImg src={Logo} alt="" />
      </Link>
      <Link to="/cart">
        <CartImgContainer>
          <img src={Cart} alt="" />
          <CartBubble>{cartSize}</CartBubble>
        </CartImgContainer>
      </Link>
    </Container>
  );
};

export default Nav;