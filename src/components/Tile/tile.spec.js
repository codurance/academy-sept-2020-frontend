import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Tile should', () => {
  const titleStub = 'tile title';
  const textStub = "I'm a text area";
  const buttonStub = "I'm a button";
  test('foo', () => {
    const { getByText } = render(
      <Tile title={titleStub} textArea={textStub} button={buttonStub} />
    );
    expect(getByText(titleStub)).toBeInTheDocument();
    expect(getByText(textStub)).toBeInTheDocument();
    expect(getByText(buttonStub)).toBeInTheDocument();
  });
});
