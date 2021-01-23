import React from 'react';
import styled from "styled-components";
import Trash from "../../../assets/TrashIcon.svg";
import { ColorBlock } from '../../GeneralComponents';

const TrashImg = styled.img`
  width:2.4rem;
  filter: invert(100%) sepia(14%) saturate(2797%) hue-rotate(288deg) brightness(123%) contrast(67%);
`;

interface Props {
  removePaletteItem: () => void;
}

const TrashItem = ({ removePaletteItem }: Props) => (
  <ColorBlock backgroundColor="f3f3f3" onClick={removePaletteItem}>
    <TrashImg src={Trash} />
  </ColorBlock>
)

export default TrashItem;