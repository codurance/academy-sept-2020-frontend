const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
import { serverMock } from '../../utils/mockServerResponse';
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

export default function useAddTopic() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function addTopic(learningpathId, topicId) {
    return await authenticatedApiCall(
      `${BACKEND_API_URL}/learningpath/${learningpathId}`,
      {
        auth: true,
        method: 'PUT',
        body: { id: topicId },
      }
    );
  };
}
