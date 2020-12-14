const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useGetTopicDetails() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function getTopicDetails(topicId) {
    return await authenticatedApiCall(`${BACKEND_API_URL}/topic/${topicId}`, {
      auth: true,
      method: 'GET',
    });
  };
}
