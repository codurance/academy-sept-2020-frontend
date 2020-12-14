import useGetTopicDetails from './useGetTopicDetails';
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

describe('getTopicDetails should', () => {
  test('retrieve an array with learningpaths', async () => {
    const expectedData = {
      id: 1,
      name: 'AWS',
      description: 'Serverless course',
      subtopics: [
        {
          name: 'EC2',
          id: 1,
          resources: [
            {
              label: 'Atlassian',
              url: 'https://id.atlassian.com/login',
            },
            {
              label: 'Atlassian 2',
              url: 'https://id.atlassian.com/login',
            },
            {
              label: 'Atlassian 3',
              url: 'https://id.atlassian.com/login',
            },
          ],
        },
        {
          name: 'RDS',
          id: 2,
          resources: [
            {
              label: 'NBA',
              url: 'https://www.nbamaniacs.com/',
            },
            {
              label: 'Atlassian 2',
              url: 'https://id.atlassian.com/login',
            },
            {
              label: 'Atlassian 3',
              url: 'https://id.atlassian.com/login',
            },
          ],
        },
      ],
    };
    mockSuccessfulApiCall(expectedData);
    serverMock();
    const getTopicDetails = useGetTopicDetails();

    const { error, data } = await getTopicDetails(1);

    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
