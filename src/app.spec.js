import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { useGoogleLogin } from 'react-use-googlelogin';

jest.mock('react-use-googlelogin');

describe('App protects some routes if the user is not authenticated and redirects to login if so.', () => {
  it('should render the login button if user is unauthenticated', () => {
    useGoogleLogin.mockImplementation(() => {
      return {
        googleUser: undefined,
        grantOfflineAccess: () => {},
        isSignedIn: false,
      };
    });
    const { getByText } = render(<App />);
    expect(getByText('Sign In')).toBeInTheDocument();
  });
});
