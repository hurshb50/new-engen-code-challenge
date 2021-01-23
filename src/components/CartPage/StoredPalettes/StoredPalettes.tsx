import React from 'react'
import styled from "styled-components";
import { Palettes } from '../../../hooks/dataTypes';
import { PrimaryHeader } from '../../GeneralComponents';
import StoredPaletteItem from './StoredPaletteItem';

const StoredPalettesContainer = styled.div`
  &:before {
    content: ""; 
    display: block;
    margin: 0 1rem;
    border-bottom: 1px solid #d5d5d5;
  }
`;

interface ComponentProps {
  palettes: Palettes;
  removePalette: (title: string) => void;
}

const StoredPalettes = (props: ComponentProps) => {
  const { palettes, removePalette } = props;

  return (
    <StoredPalettesContainer>
      <PrimaryHeader>Previously saved color palettes</PrimaryHeader>
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
