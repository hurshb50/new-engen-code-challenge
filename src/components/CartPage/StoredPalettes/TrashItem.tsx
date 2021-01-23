import React from 'react';
import styled from "styled-components";
import Trash from "../../../assets/TrashIcon.svg";
import { ColorBlock } from '../../GeneralComponents';

const TrashBlock = styled(ColorBlock)`
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`;

const TrashImg = styled.img`
  width:2.4rem;
  filter: invert(100%) sepia(14%) saturate(2797%) hue-rotate(288deg) brightness(123%) contrast(67%);
`;

interface ComponentProps {
  removePaletteItem: () => void;
}

const TrashItem = ({ removePaletteItem }: ComponentProps) => (
  <TrashBlock backgroundColor="f3f3f3" onClick={removePaletteItem}>
    <TrashImg src={Trash} />
  </TrashBlock>
)

export default TrashItem;