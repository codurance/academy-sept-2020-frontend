import React from 'react';
import { render } from '@testing-library/react';
import Editor from './Editor';

describe('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    const { queryByText } = render(<Editor />);
    expect(queryByText('Publish')).toBeInTheDocument();
  });

  test('should render title and description input fields', () => {
    const { queryByLabelText } = render(<Editor />);
    expect(queryByLabelText('learning-path-title')).toBeInTheDocument();
    expect(queryByLabelText('learning-path-description')).toBeInTheDocument();
  });

  test('should foo and bar', () => {
    const { queryByLabelText, st } = render(<Editor />);
    let element = queryByLabelText('learning-path-title');
    expect(element).toBeInTheDocument();
  });
});
