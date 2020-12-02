export const refreshTokenSetup = (res) => {
  let refreshTiming = 15 * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = 15 * 1000;
    sessionStorage.setItem('authToken', newAuthRes.tokenId);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
