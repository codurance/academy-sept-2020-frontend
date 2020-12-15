import useAddTopic from './useAddTopic';
import useAuthenticatedApiCall from '../useAuthenticatedApiCall/useAuthenticatedApiCall';

const { serverMock } = require('../../utils/mockServerResponse');

jest.mock('../useAuthenticatedApiCall/useAuthenticatedApiCall');

function mockSuccessfulApiCall(expectedData) {
  useAuthenticatedApiCall.mockImplementationOnce(() => {
    return function authenticatedApiCall() {
      return {
        error: undefined,
        data: expectedData,
      };
    };
  });
}

describe('useAddTopic should', () => {
  test('add a topic to a specific learningpath', async () => {
    const initialData = { topicId: 1 };
    const expectedData = {};
    mockSuccessfulApiCall(expectedData);
    serverMock();
    const addTopic = useAddTopic(initialData);

    const { error, data } = await addTopic();

    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
