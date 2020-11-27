import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('home dummy describe', () => {
  test('home dummy test', () => {
    const { getByText } = render(<Home />);

    expect(1).toBe(1);
    expect(getByText('Im an H1')).toBeInTheDocument();
  });
});
