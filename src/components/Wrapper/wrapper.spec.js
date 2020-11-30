import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from './Wrapper';

describe('Wrapper should', () => {
  test('render the children', () => {
    const stringStub = `<p>Hello</p>`;
    const { getByText } = render(<Wrapper>{stringStub}</Wrapper>);

    expect(getByText(stringStub)).toBeInTheDocument();
  });
});
