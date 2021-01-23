import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

interface ColorData {
  id: number;
  hex: string;
  __type: string;
}

interface ColorListProps {
  colorOffset: number;
  loadMoreColors: (quantity: number) => void;
  colorDataList: ColorData[];
  isDataLoading: boolean;
  dataError: any;
}

const GET_COLORS = gql`
  query GET_COLORS($numResults: Int!, $resultOffset: Int!){
    colors(numResults: $numResults, resultOffset: $resultOffset) {
      id
      hex
    }
  }
`;

const useColorData = (colorOffset: number, numResults: number): [ColorData[], boolean, any] => {
  const [colorDataList, setColorDataList] = useState<ColorData[]>([]);
  const addToList = ({ colors }: { colors: ColorData[] }) => setColorDataList(prevList => [...prevList, ...colors]);

  const { loading, error } = useQuery(GET_COLORS, { variables: { numResults: numResults, resultOffset: colorOffset }, onCompleted: addToList });

  return [colorDataList, loading, error];
}

const useColorList = (): ColorListProps => {
  const [colorOffset, setOffset] = useState(20);
  const [numResults, setNumResults] = useState(0);

  const loadMoreColors = (quantity: number) => {
    setNumResults(quantity);
    setOffset(prevOffset => (prevOffset >= 100 ? 100 : 20 + prevOffset + quantity));
  };

  const [colorDataList, isDataLoading, dataError] = useColorData(colorOffset, numResults);

  return { colorOffset, loadMoreColors, colorDataList, isDataLoading, dataError };
}

export default useColorList;
export type { ColorData };
