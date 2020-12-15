import useCreateTopic from './useCreateTopic';
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

describe('createTopic should', () => {
  test('send a new topic and receive it with the id', async () => {
    const initialData = { name: 'name', title: 'title', subtopics: [] };
    const expectedData = { ...initialData, id: 1 };
    mockSuccessfulApiCall(expectedData);
    serverMock();
    const createTopic = useCreateTopic(initialData);

    const { error, data } = await createTopic();

    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
