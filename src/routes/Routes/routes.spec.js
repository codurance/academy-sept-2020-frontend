import React from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';
import Login from '../../components/Login/Login';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';

jest.mock('../../components/Login/Login');
jest.mock('../../components/QuestionPrompt/QuestionPrompt');
jest.mock('../../components/Login/GoogleAuthProvider');

function mockUnauthenticatedUser() {
  useGoogleAuth.mockImplementation(() => {
    return {
      isSignedIn: false,
    };
  });
}

function mockAuthenticatedUser() {
  useGoogleAuth.mockImplementation(() => {
    return {
      isSignedIn: true,
    };
  });
}

describe('Route component', () => {
  it('should render Login component if user is unauthenticated', () => {
    Login.mockImplementationOnce(() => <>Sign In</>);
    QuestionPrompt.mockImplementationOnce(() => <>Survey</>);
    mockUnauthenticatedUser();

    const { queryByText } = render(<Routes />);

    expect(queryByText('Sign In')).toBeInTheDocument();
  });

  it('should render home (survey view as of today) if user is authenticated', () => {
    Login.mockImplementationOnce(() => <>Sign In</>);
    QuestionPrompt.mockImplementationOnce(() => <>Survey</>);
    mockAuthenticatedUser();

    const { queryByText } = render(<Routes />);

    expect(queryByText('Sign In')).not.toBeInTheDocument();
  });
});
