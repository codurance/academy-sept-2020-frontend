const { serverMock } = require('../utils/mockServerResponse');
const { default: sendSurveyData } = require('./sendSurveyData');

describe('sendSurveyData should', () => {
  test('send the information to the backend', async () => {
    serverMock();
    const body = { email: 'email@mail.com', preference: 'message' };
    const error = await sendSurveyData(body);
    expect(error).toBe(undefined);
  });
});
