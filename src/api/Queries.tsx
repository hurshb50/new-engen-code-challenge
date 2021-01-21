import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export interface ColorData {
  id: number;
  hex: string;
  __type: string;
}

const GET_COLORS = gql`
  query GET_COLORS($numColors: Int!){
    colors(numResults: 20, resultOffset: $numColors) {
      id
      hex
    }
  }
`;

interface QueryResponseData {
  colors: ColorData[];
}

interface useColorListReturn {
  colorList: ColorData[];
  loading: boolean;
  error: any;
}

export const useColorList = (numColors: number): useColorListReturn => {

  const [colorList, setColorList] = useState<ColorData[]>([]);
  const addColorData = (data: QueryResponseData) => {
    setColorList(prevColorList => [...prevColorList, ...data.colors]);
  }

  const { loading, error } = useQuery(GET_COLORS, { variables: { numColors }, onCompleted: addColorData });
  return { colorList, loading, error };

}