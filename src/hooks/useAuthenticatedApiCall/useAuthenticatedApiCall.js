import { apiCall } from '../../utils/apiCall';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

export default function useAuthenticatedApiCall() {
  const { googleUser } = useGoogleAuth();

  return async function authenticatedApiCall(url, options) {
    if (googleUser) {
      await apiCall(url, options);
    }
  };
}
