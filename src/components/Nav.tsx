import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/NewEngen-Logo.svg";
import Cart from "../assets/CartIcon.svg";

const NavContainer = styled.header`
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
  
  background-color:#F13757;
  height: 2.2rem;
  width:2.2rem;
  border-radius: 2.2rem;

  display:flex;
  justify-content:center;
  align-items:center;


  font-size: 1.2rem;
  font-weight: 600;
  color: #FFFFFF;
`;

interface Props {
  cartSize: number;
}


const Nav = ({ cartSize }: Props) => {
  return (
    <NavContainer>
      <Link to="/">
        <LogoImg src={Logo} alt="" />
      </Link>
      <Link to="/cart">
        <CartImgContainer>
          <img src={Cart} alt="" />
          <CartBubble>{cartSize}</CartBubble>
        </CartImgContainer>
      </Link>
    </NavContainer>
  );
};

export default Nav;