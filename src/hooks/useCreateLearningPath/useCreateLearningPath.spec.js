import useCreateLearningPath from './useCreateLearningPath';
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

describe('createLearningPath should', () => {
  test('retrieve an array with learningpaths', async () => {
    const expectedData = {
      id: 1,
      name: 'name',
      description: 'description',
      topics: [
        { name: 'topic1', description: 'description1', id: 1 },
        { name: 'topic2', description: 'description2', id: 2 },
      ],
    };
    const initialData = {
      name: 'name',
      description: 'description',
      topics: [
        { name: 'topic1', description: 'description1' },
        { name: 'topic2', description: 'description2' },
      ],
    };
    mockSuccessfulApiCall(expectedData);
    serverMock();
    const createLearningPath = useCreateLearningPath();

    const { error, data } = await createLearningPath(initialData);

    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
