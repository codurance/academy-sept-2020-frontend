import React, { useContext, useEffect } from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;
import PropTypes from 'prop-types';

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
    isSignedIn,
    refreshUser,
  } = useGoogleLogin({
    clientId: googleOAuthId,
  });

  useEffect(() => {
    googleUser && localStorage.setItem('authTokenId', googleUser.tokenId);
  }, [googleUser]);

  const fetchWithRefresh = async () => {
    const shouldRefreshToken =
      googleUser.expiresAt - 300 * 1000 - Date.now() <= 0;
    const hasMissingToken = localStorage.getItem('authTokenId') === undefined;

    if (shouldRefreshToken || hasMissingToken) {
      await refreshUser();
    }
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
GoogleAuthProvider.propTypes = {
  children: PropTypes.node,
};
