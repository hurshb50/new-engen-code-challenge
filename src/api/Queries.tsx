import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";




const GET_COLORS = gql`
  query GET_COLORS($resultOffset: Int!){
    colors(numResults: 20, resultOffset: $resultOffset) {
      id
      hex
    }
  }
`;

interface ColorData {
  id: number;
  hex: string;
  __type: string;
}

const useColors =
  (): [number, () => void, ColorData[], boolean, any] => {
    const [colorOffset, setOffset] = useState(0);
    const incOffset = () => setOffset(prevOffset => (prevOffset >= 100 ? 100 : prevOffset + 20));

    const [colorDataList, loading, error] = useColorData(colorOffset);

    return [colorOffset, incOffset, colorDataList, loading, error];
  }

const useColorData =
  (colorOffset: number): [ColorData[], boolean, any] => {
    const [colorDataList, setColorDataList] = useState<ColorData[]>([]);
    const addToList = ({ colors }: { colors: ColorData[] }) => setColorDataList(prevList => [...prevList, ...colors]);

    const { loading, error } = useQuery(GET_COLORS, { variables: { resultOffset: colorOffset }, onCompleted: addToList });

    return [colorDataList, loading, error];
  }

interface Cart {
  [id: number]: ColorData
}

const useCart =
  (): [Cart, (color: ColorData) => void, (color: ColorData) => void, (color: ColorData) => void, () => void] => {
    const [cart, setCart] = useState<Cart>({});

    const addToCart = (color: ColorData) => setCart((prevCart: Cart) => ({ ...prevCart, [color.id]: color }));
    const removeFromCart = (color: ColorData) => {
      //separate color from others in the cart
      const { [color.id]: removedColor, ...newCart } = cart;
      setCart(newCart);
    }

    const updateCart = (color: ColorData) => {
      // if color is not in cart yet, add it
      if (!cart[color.id]) addToCart(color);
      //else remove it
      else removeFromCart(color);
    }

    const clearCart = () => setCart({});

    return [cart, addToCart, updateCart, removeFromCart, clearCart];
  }

export { useColors, useCart };
export type { ColorData, Cart };
