import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import Editor from './Editor';

jest.mock('../../components/Login/GoogleAuthProvider');

function mockGoogleUserAuthenticated() {
  useGoogleAuth.mockImplementationOnce(() => {
    return { fetchWithRefresh: async () => {}, googleUser: true };
  });
}

describe('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    mockGoogleUserAuthenticated();
    const { queryByText } = render(
      <Router>
        <Editor />
      </Router>
    );
    expect(queryByText('Publish')).toBeInTheDocument();
  });

  test('should render title and description input fields', () => {
    mockGoogleUserAuthenticated();
    const { queryByLabelText } = render(
      <Router>
        <Editor />
      </Router>
    );
    expect(queryByLabelText('learning-path-title')).toBeInTheDocument();
    expect(queryByLabelText('learning-path-description')).toBeInTheDocument();
  });
});
