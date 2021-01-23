import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Color } from "./dataTypes";

interface useColorListReturnProps {
  colorList: Color[];
  colorOffset: number;
  dataError: any;
  isDataLoading: boolean;
  loadMoreColors: (quantity: number) => void;
}

const useColorList = (): useColorListReturnProps => {
  const [colorOffset, setOffset] = useState(20);

  const [numResults, setNumResults] = useState(0);

  const [colorList, isDataLoading, dataError] = useColorData(colorOffset, numResults);

  const loadMoreColors = (quantity: number) => {
    setNumResults(quantity);
    setOffset(prevOffset => (20 + prevOffset + quantity));
  };

  return { colorList, colorOffset, dataError, isDataLoading, loadMoreColors, };
}

export default useColorList;



const useColorData = (colorOffset: number, numResults: number): [Color[], boolean, any] => {
  const [colorList, setColorList] = useState<Color[]>([]);

  const addToList = ({ colors }: { colors: Color[] }) => setColorList(prevList => [...prevList, ...colors]);

  const { loading, error } = useQuery(GET_COLORS, { variables: { numResults: numResults, resultOffset: colorOffset }, onCompleted: addToList });

  return [colorList, loading, error];
}

const GET_COLORS = gql`
  query GET_COLORS($numResults: Int!, $resultOffset: Int!){
    colors(numResults: $numResults, resultOffset: $resultOffset) {
      id
      hex
    }
  }
`;