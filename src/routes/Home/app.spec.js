import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('deleteme test', () => {
  test('deleteme again', () => {
    const { getByText } = render(<Home />);

    expect(1).toBe(1);
    expect(getByText('This is the home screen')).toBeInTheDocument();
  });
});
