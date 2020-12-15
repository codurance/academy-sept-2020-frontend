const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import { serverMock } from '../../utils/mockServerResponse';
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useCreateTopic() {
  serverMock();
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function createTopic(body) {
    return await authenticatedApiCall(`${BACKEND_API_URL}/topic`, {
      auth: true,
      method: 'POST',
      body,
    });
  };
}
