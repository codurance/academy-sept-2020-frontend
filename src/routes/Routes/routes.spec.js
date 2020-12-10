import React from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';
import Login from '../../components/Login/Login';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

jest.mock('../../components/Login/Login');
jest.mock('../../components/Login/GoogleAuthProvider');

describe('Route component', () => {
  it('should not render home (survey view as of today) if user is unauthenticated', () => {
    Login.mockImplementationOnce(() => <>Sign In</>);
    useGoogleAuth.mockImplementation(() => {
      return {
        isSignedIn: false,
      };
    });
    const { getByText } = render(<Routes />);

    expect(getByText('Sign In')).toBeInTheDocument();
  });
});
