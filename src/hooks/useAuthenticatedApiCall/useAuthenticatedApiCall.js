import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import { apiCall } from '../../utils/apiCall';

export default function useAuthenticatedApiCall() {
  const { googleUser, fetchWithRefresh } = useGoogleAuth();

  return async function authenticatedApiCall(url, options) {
    if (googleUser) {
      await fetchWithRefresh();
      return await apiCall(url, options);
    }
  };
}
