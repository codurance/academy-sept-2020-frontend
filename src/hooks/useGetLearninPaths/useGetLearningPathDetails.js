const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useGetLearningPathDetails() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function getLearningPathDetails(id) {
    return await authenticatedApiCall(`${BACKEND_API_URL}/learningpath/${id}`, {
      auth: true,
      method: 'GET',
    });
  };
}
