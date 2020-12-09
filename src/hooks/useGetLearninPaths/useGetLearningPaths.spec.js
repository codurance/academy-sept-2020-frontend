import useGetLearningPaths from './useGetLearningPaths';
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

describe('getLearningPaths should', () => {
  test('retrieve an array with learningpaths', async () => {
    const expectedData = {
      learningPaths: [
        {
          name: 'AWS',
          description: 'Learn by example AWS',
        },
        {
          name: 'Java',
          description: 'Learn by example Java',
        },
      ],
    };
    mockSuccessfulApiCall(expectedData);
    serverMock();
    const getLearningPaths = useGetLearningPaths();

    const { error, data } = await getLearningPaths();

    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
