import React, { useState } from 'react';
import styled from "styled-components";
import Button from "../Button";
import { Cart, ColorData } from '../../api/Queries';
import CartPalette from './CartPalette';

const Container = styled.div``;

const CartPaletteContainer = styled.div`
`;
const PrevPaletteContainer = styled.div`
  border-top: 1px solid #D5D5D5;
`;

const ContainerTitle = styled.h1`
  margin: 1rem;
`;

const InputContainer = styled.div``;
const Input = styled.input`
  height:4rem;
  width: 29rem;

  margin: 1rem;

  border-radius: 0.5rem;

  border: none;
`;

const InputTitle = styled.h2`
  margin: 1rem;
`;

interface Props {
  cart: Cart;
  clearCart: () => void;
  removeFromCart: (color: ColorData) => void;
}

interface Palette {
  [title: string]: ColorData[];
}

const CartPage = (props: Props) => {
  const [inputValue, setInputValue] = useState("");
  const { cart, clearCart, removeFromCart } = props;
  const cartColors = Object.values(cart);

  const savePalette = () => {
    const cartSize = Object.keys(cart).length
    if (inputValue && cartSize > 0) {
      const prevPaletteStr = localStorage.getItem('prevPalettes');
      //if palettes have been saved before
      if (prevPaletteStr) {
        const oldPalettes: Palette = JSON.parse(prevPaletteStr);
        const newPalettes = {
          ...oldPalettes,
          [inputValue]: cart
        }
        localStorage.setItem('prevPalettes', JSON.stringify(newPalettes));
      }

      //if no palettes have been saved before
      else {
        const newPalettes = { [inputValue]: cart };
        localStorage.setItem('prevPalettes', JSON.stringify(newPalettes));
      }

      clearCart();
      setInputValue("");
    }
  }

  const getPrevPalettes = (): Palette => {
    const prevPalettes = localStorage.getItem('prevPalettes');
    if (prevPalettes) return JSON.parse(prevPalettes) as Palette;
    else return {};
  }

  const prevPalettes: Palette = getPrevPalettes();

  Object.entries(prevPalettes).forEach(pal => console.log(pal))

  return (
    <Container>
      <CartPaletteContainer>
        <ContainerTitle>Your current color cart palette</ContainerTitle>
        <CartPalette colors={cartColors} removeFromCart={removeFromCart} />

        <InputContainer>
          <InputTitle>Name and save your color palette</InputTitle>
          <Input value={inputValue} onChange={({ currentTarget }) => setInputValue(currentTarget.value)} />
          <Button alignment="block" onClick={savePalette}>Save Palette</Button>
        </InputContainer>
      </CartPaletteContainer>

      <PrevPaletteContainer>
        <ContainerTitle>Previously saved color palettes</ContainerTitle>
        {Object.entries(prevPalettes).map(pal => {
          console.log(pal);
        })}
      </PrevPaletteContainer>
    </Container>
  );
};

export default CartPage;

























/* import React, { useState } from 'react';
import styled from "styled-components";
import { ColorData } from '../api/Queries';
import { CartData } from '../App';
import ColorItem from './ColorItem';

const CartPageContainer = styled.div`

`;

const CurrCartView = styled.div`
`;

const ViewTitle = styled.h1`
  margin:1rem;
  font-size: 2.4rem;
  color: #282828;
  font-weight: 600;
`;

const Palette = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SavePalette = styled.div`

`;

const SavePaletteTitle = styled.h2`
  margin:1rem;
  font-size: 1.6rem;
  color: #282828;
  font-weight: 600;
`;

const SavePaletteInput = styled.input`
  border: none;
  width: 29rem;
  height: 4rem;
  border-radius: 0.5rem;
  margin: 1rem;
  text-indent: 1rem;
  font-size: 1.6rem;

  &::placeholder {
    color: #d5d5d5;
  }
`;

const SavePaletteButton = styled.button`
  display: inline-block;

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

const PrevPalettesView = styled.div`

`;

interface Props {
  cart: CartData;
  clearCart: () => void;
  updateCart: (color: ColorData) => void;
}

const CartPage = ({ cart, clearCart, updateCart }: Props) => {
  const [title, setTitle] = useState("");

  const storage = localStorage.getItem('prevPalettes');
  const prevPalettes = (storage ? JSON.parse(storage) : null);

  const savePalette = () => {
    if (title) {
      const prevPalettes = localStorage.getItem('prevPalettes');

      if (!prevPalettes) {
        const newPalettes = { [title]: Object.values(cart) }
        localStorage.setItem('prevPalettes', JSON.stringify(newPalettes));
      }
      else {
        const newPalettes = JSON.parse(prevPalettes);
        newPalettes[title] = Object.values(cart);
        localStorage.setItem('prevPalettes', JSON.stringify(newPalettes));
      }
      clearCart();
    }
  }

  return (
    <CartPageContainer>
      <CurrCartView>
        <ViewTitle>Your current color cart palette</ViewTitle>
        <Palette>
          {Object.values(cart).map(colorData => <ColorItem key={colorData.id} colorData={colorData} updateCart={updateCart} selected={false} />)}
        </Palette>
        <SavePalette>
          <SavePaletteTitle>Name and save your color pallette</SavePaletteTitle>
          <SavePaletteInput value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="Color palette name" />
          <SavePaletteButton onClick={savePalette}>Save Palette</SavePaletteButton>
        </SavePalette>
      </CurrCartView>

      {(prevPalettes ? (
        <PrevPalettesView>
          <ViewTitle>Previously saved color palettes</ViewTitle>

          {Object.entries(prevPalettes).map(palette => {
            const [title, colors]: [string, any] = palette;
            console.log(title, colors)
            return (
              <>
                <SavePaletteTitle>{title}</SavePaletteTitle>
                <Palette>
                  {colors.map((colorData: any) => <ColorItem key={colorData.id} colorData={colorData} updateCart={updateCart} selected={false} />)}
                </Palette>
              </>
            )
          })}


        </PrevPalettesView>
      ) : null)}
    </CartPageContainer>
  );
};

export default CartPage; */