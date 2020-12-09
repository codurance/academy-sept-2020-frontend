const { serverMock } = require('../../utils/mockServerResponse');
import SendSurveyData from './useSendSurveyData';

describe.skip('sendSurveyData should', () => {
  test('send the information to the backend', async () => {
    serverMock();
    const body = { email: 'email@mail.com', preference: 'message' };
    const error = await SendSurveyData(body);
    expect(error).toBe(undefined);
  });
});
