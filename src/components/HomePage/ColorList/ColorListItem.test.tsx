// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Color } from '../../../hooks/dataTypes';
import ColorListItem from "./ColorListItem";

describe('ColorListItem', () => {
  const exampleColor: Color = {
    id: 10292,
    hex: "dedede",
    __type: "Color"
  };

  const fakeUpdateCart = jest.fn();

  it('renders', async () => {
    const container = render(<ColorListItem color={exampleColor} selected={false} updateCart={fakeUpdateCart} />);

    const itemText = await container.findByText(`#${exampleColor.hex}`);

    expect(itemText).toBeTruthy();
  })

  it('sends correct color data to updateCart', async () => {

    const container = render(<ColorListItem color={exampleColor} selected={false} updateCart={fakeUpdateCart} />);

    const itemText = await container.findByText(`#${exampleColor.hex}`);

    await fireEvent(itemText, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(fakeUpdateCart).toHaveBeenCalledWith(exampleColor);
  });
});