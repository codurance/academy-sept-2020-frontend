import { apiCall } from '../../utils/apiCall';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

export default function useAuthenticatedApiCall() {
  const { googleUser, fetchWithRefresh } = useGoogleAuth();

  return async function authenticatedApiCall(url, options) {
    if (googleUser) {
      await fetchWithRefresh();
      const { error } = await apiCall(url, options);
      return { error };
    }
  };
}
