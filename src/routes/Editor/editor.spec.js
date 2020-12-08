import React from 'react';
import { render } from '@testing-library/react';
import Editor from "./Editor";

describe('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    const { queryByText } = render(<Editor />);
    expect(queryByText('Publish')).toBeInTheDocument();
  });
});
