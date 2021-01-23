import React from 'react'
import styled from "styled-components";
import { Palettes } from '../../../hooks/useStoredPalettes';
import { PrimaryHeader } from '../../GeneralComponents';
import StoredPaletteItem from './StoredPaletteItem';

const StoredPalettesContainer = styled.div`
  &:before {
    content: ""; 
    display: block;
    margin: 0 1rem;
    padding-top: 3rem;
    border-bottom: 1px solid #d5d5d5;
}
`;

const StoredPalettesHeader = styled(PrimaryHeader)`
  margin-top: 4rem;
`;

interface Props {
  palettes: Palettes;
  removePalette: (title: string) => void;
}

const StoredPalettes = (props: Props) => {
  const { palettes, removePalette } = props;

  return (
    <StoredPalettesContainer>
      <StoredPalettesHeader>Previously saved color palettes</StoredPalettesHeader>
      {Object.entries(palettes).map(pal => {
        const [title, colors] = pal;
        return (
          <StoredPaletteItem
            key={title}
            colors={colors}
            removePalette={removePalette}
            title={title}
          />
        );
      })}
    </StoredPalettesContainer>
  )
}

export default StoredPalettes
