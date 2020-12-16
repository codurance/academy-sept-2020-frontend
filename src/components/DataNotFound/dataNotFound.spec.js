import { render } from '@testing-library/react';
import React from 'react';
import DataNotFound from './DataNotFound';

describe('DataNotFound should', () => {
  test('render a text and an image', () => {
    const { getByText, getByAltText } = render(<DataNotFound type={'topic'} />);

    expect(getByText("Sorry, couldn't find this topic")).toBeInTheDocument();
    expect(getByAltText('Not found')).toBeInTheDocument();
  });
});
