import React from 'react';
import { render } from '@testing-library/react';
import Editor from './Editor';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

jest.mock('../../components/Login/GoogleAuthProvider');

function mockGoogleUserAuthenticated() {
  useGoogleAuth.mockImplementationOnce(() => {
    return { fetchWithRefresh: async () => {}, googleUser: true };
  });
}

describe('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    mockGoogleUserAuthenticated();
    const { queryByText } = render(<Editor />);
    expect(queryByText('Publish')).toBeInTheDocument();
  });

  test('should render title and description input fields', () => {
    mockGoogleUserAuthenticated();
    const { queryByLabelText } = render(<Editor />);
    expect(queryByLabelText('learning-path-title')).toBeInTheDocument();
    expect(queryByLabelText('learning-path-description')).toBeInTheDocument();
  });
});
