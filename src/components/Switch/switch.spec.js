import React from 'react';
import { render, act } from '@testing-library/react';
import Switch from './Switch';

describe('Switch should', () => {
  test('should be rendered in in view-mode as per default', () => {
    const { getByAltText, container, debug } = render(<Switch />);
    debug();
    expect(getByAltText('Enable editor mode')).toBeInTheDocument();
  });
});
