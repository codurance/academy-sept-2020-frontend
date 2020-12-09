import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

const { serverMock } = require('../../utils/mockServerResponse');
import useSendSurveyData from './useSendSurveyData';

jest.mock('../useAuthenticatedApiCall/useAuthenticatedApiCall');

function mockSuccessfulApiCall(expectedData) {
  useAuthenticatedApiCall.mockImplementationOnce(() => {
    return function authenticatedApiCall() {
      return {
        error: undefined,
      };
    };
  });
}

describe('sendSurveyData should', () => {
  test('send the information to the backend', async () => {
    mockSuccessfulApiCall();
    serverMock();
    const body = { email: 'email@mail.com', preference: 'message' };
    const sendSurveyData = useSendSurveyData();

    const error = await sendSurveyData(body);

    expect(error).toBe(undefined);
  });
});
