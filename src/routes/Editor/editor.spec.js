import React from 'react';
import { render } from '@testing-library/react';
import Editor from './Editor';
import { GoogleAuthProvider } from '../../components/Login/GoogleAuthProvider';

// FIXME: Google Auth Provider should be mocked.
describe.skip('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    const { queryByText } = render(
      <GoogleAuthProvider>
        <Editor />
      </GoogleAuthProvider>
    );
    expect(queryByText('Publish')).toBeInTheDocument();
  });

  test('should render title and description input fields', () => {
    const { queryByLabelText } = render(
      <GoogleAuthProvider>
        <Editor />
      </GoogleAuthProvider>
    );
    expect(queryByLabelText('learning-path-title')).toBeInTheDocument();
    expect(queryByLabelText('learning-path-description')).toBeInTheDocument();
  });

  test('should foo and bar', () => {
    const { queryByLabelText } = render(
      <GoogleAuthProvider>
        <Editor />
      </GoogleAuthProvider>
    );
    let element = queryByLabelText('learning-path-title');
    expect(element).toBeInTheDocument();
  });
});
