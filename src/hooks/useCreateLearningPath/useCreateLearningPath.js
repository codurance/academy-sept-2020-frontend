const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import { serverMock } from '../../utils/mockServerResponse';
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useCreateLearningPath() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function createLearningPath(body) {
    return await authenticatedApiCall(`${BACKEND_API_URL}/learningpath`, {
      auth: true,
      method: 'POST',
      body,
    });
  };
}
