import React from 'react';
import styled from "styled-components";
import { Color } from '../../../hooks/dataTypes';
import { ColorBlock, ColorsContainer } from '../../GeneralComponents';
import TrashItem from './TrashItem';

const PaletteTitle = styled.h3`
  margin: 1rem;
  font-weight: 400;
`;

interface ComponentProps {
  colors: Color[];
  removePalette: (title: string) => void;
  title: string;
}

const StoredPaletteItem = (props: ComponentProps) => {
  const { colors, removePalette, title } = props;
  const removePaletteItem = () => removePalette(title);

  return (
    <>
      <PaletteTitle>{title} - {colors.length} colors</PaletteTitle>

      <ColorsContainer>
        {colors.map(color => (
          <ColorBlock key={color.id} backgroundColor={color.hex}>
            #{color.hex}
          </ColorBlock>
        ))}
        <TrashItem removePaletteItem={removePaletteItem} />
      </ColorsContainer>
    </>
  )
}

export default StoredPaletteItem
