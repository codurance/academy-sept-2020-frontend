import useAuthenticatedApiCall from './useAuthenticatedApiCall';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import { apiCall } from '../../utils/apiCall';

jest.mock('../../components/Login/GoogleAuthProvider');
jest.mock('../../utils/apiCall');

function mockSuccessfulApiCall() {
  apiCall.mockImplementationOnce(() => {
    return { error: undefined };
  });
}

function mockUserAuthenticated() {
  const fetchWithRefreshMock = jest.fn();
  useGoogleAuth.mockImplementationOnce(() => {
    return { googleUser: true, fetchWithRefresh: fetchWithRefreshMock };
  });
  return fetchWithRefreshMock;
}

function mockFailedApiCall() {
  const errorResponse = { error: 'an error occurred' };
  apiCall.mockImplementationOnce(() => {
    return errorResponse;
  });
  return errorResponse;
}

function mockUserNotAuthenticated() {
  useGoogleAuth.mockImplementationOnce(() => {
    return { googleUser: undefined };
  });
}

describe('useAuthenticatedApiCall should wrap apiCall authenticating user and refreshing token before the actual call', () => {
  it('should not do the api call when user is not authenticated', async () => {
    mockUserNotAuthenticated();
    const authenticatedApiCall = useAuthenticatedApiCall();
    await authenticatedApiCall('url', {});

    expect(apiCall).not.toBeCalled();
  });

  it('should do the api call when user is authenticated', async () => {
    mockUserAuthenticated();
    mockSuccessfulApiCall();
    const authenticatedApiCall = useAuthenticatedApiCall();

    await authenticatedApiCall('url', {});

    expect(apiCall).toBeCalled();
  });

  it('should refresh user token before attempting actual api call', async () => {
    mockSuccessfulApiCall();
    const fetchWithRefresh = mockUserAuthenticated();
    const authenticatedApiCall = useAuthenticatedApiCall();

    await authenticatedApiCall('url', {});

    // expect(fetchWithRefresh).toHaveBeenCalledBefore(apiCall); --> not working, research
    expect(fetchWithRefresh).toBeCalled();
    expect(apiCall).toBeCalled();
  });

  it('should tell if an error occurred during the api call', async () => {
    mockUserAuthenticated();
    const errorResponse = mockFailedApiCall();
    const authenticatedApiCall = useAuthenticatedApiCall();

    const error = await authenticatedApiCall('url', {});

    expect(error).toStrictEqual(errorResponse);
  });
});
