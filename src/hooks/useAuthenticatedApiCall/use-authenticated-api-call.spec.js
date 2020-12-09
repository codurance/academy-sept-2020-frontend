import useAuthenticatedApiCall from './useAuthenticatedApiCall';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import { apiCall } from '../../utils/apiCall';

jest.mock('../../components/Login/GoogleAuthProvider');
jest.mock('../../utils/apiCall');

describe('useAuthenticatedApiCall should wrap apiCall authenticating user and refreshing token before the actual call', () => {
  it('should not do the api call when user is not authenticated', async () => {
    useGoogleAuth.mockImplementationOnce(() => {
      return { googleUser: undefined };
    });
    const authenticatedApiCall = useAuthenticatedApiCall();
    await authenticatedApiCall('url', {});

    expect(apiCall).not.toBeCalled();
  });

  it('should do the api call when user is authenticated', async () => {
    useGoogleAuth.mockImplementationOnce(() => {
      return { googleUser: true };
    });
    const authenticatedApiCall = useAuthenticatedApiCall();
    await authenticatedApiCall('url', {});

    expect(apiCall).toBeCalled();
  });
});
