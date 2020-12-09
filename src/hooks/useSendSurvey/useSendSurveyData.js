import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

export default function useSendSurveyData() {
  const authenticatedApiCall = useAuthenticatedApiCall();
  return async function sendSurveyData(body) {
    const { error } = await authenticatedApiCall(`${BACKEND_API_URL}/survey`, {
      method: 'POST',
      auth: true,
      body,
    });

    return error;
  };
}
