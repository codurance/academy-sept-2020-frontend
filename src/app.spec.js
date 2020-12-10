import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { useGoogleLogin } from 'react-use-googlelogin';
import QuestionPrompt from './components/QuestionPrompt/QuestionPrompt';

jest.mock('react-use-googlelogin');
jest.mock('./components/QuestionPrompt/QuestionPrompt');

function mockUnauthenticatedUser() {
  useGoogleLogin.mockImplementation(() => {
    return {
      googleUser: undefined,
      grantOfflineAccess: () => {},
      isSignedIn: false,
    };
  });
}

function mockAuthenticatedUser() {
  useGoogleLogin.mockImplementation(() => {
    return {
      googleUser: true,
      grantOfflineAccess: () => {},
      isSignedIn: true,
    };
  });
}

describe('App protects some routes if the user is not authenticated and redirects to login if so.', () => {
  it('should render the login button if user is unauthenticated', () => {
    mockUnauthenticatedUser();

    const { getByText } = render(<App />);

    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('should render the home (survey view as of today) if user is authenticated', () => {
    mockAuthenticatedUser();
    QuestionPrompt.mockImplementation(() => <>Survey</>);

    const { getByText } = render(<App />);

    expect(getByText('Survey')).toBeInTheDocument();
  });
});
