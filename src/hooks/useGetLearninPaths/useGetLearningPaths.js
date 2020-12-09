const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useGetLearningPaths() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function getLearningPaths() {
    return await authenticatedApiCall(`${BACKEND_API_URL}/learningpath`, {
      auth: true,
      method: 'GET',
    });
  };
}
