import React, { useContext, useEffect } from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

const createContext = () => {
  const ctx = React.createContext();
  const useCtx = () => {
    const contextValue = useContext(ctx);
    if (contextValue === undefined)
      throw new Error('useCtx must be inside a Provider with a value');
    return contextValue;
  };
  return [useCtx, ctx.Provider];
};

const [useGoogleAuth, AuthProvider] = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const {
    googleUser,
    isInitialized,
    grantOfflineAccess,
    signOut,
    signIn,
    isSignedIn,
    refreshUser,
  } = useGoogleLogin({
    clientId: googleOAuthId,
  });

  useEffect(() => {
    googleUser && localStorage.setItem('authTokenId', googleUser.tokenId);
  }, [signIn, isSignedIn, fetch]);

  /**
   * A wrapper function around `fetch` that handles automatically refreshing
   * our `accessToken` if it is within 5 minutes of expiring.
   *
   * Behaves identically to `fetch` otherwise.
   */
  const fetchWithRefresh = async (input, init) => {
    let accessToken = await googleUser.accessToken;
    const shouldRefreshToken = googleUser.expiresAt - 300 * 1000 - Date.now() <= 0;
    const hasMissingToken = localStorage.getItem('authTokenId') === undefined;

    if (shouldRefreshToken || hasMissingToken) {
      const tokenObj = await refreshUser();
      accessToken = tokenObj?.accessToken ?? accessToken;
      const accessTokenId = tokenObj?.tokenId;
    }
    return fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
  return (
    <AuthProvider
      value={{
        signIn: grantOfflineAccess,
        isSignedIn,
        isInitialized,
        googleUser,
        signOut,
        fetchWithRefresh,
      }}
    >
      {children}
    </AuthProvider>
  );
};
export { useGoogleAuth };
