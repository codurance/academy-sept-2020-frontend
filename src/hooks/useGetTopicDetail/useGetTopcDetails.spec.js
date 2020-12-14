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
      name: 'topic',
      description: 'description',
      subtopics: [
        {
          name: 'subtopic 1',
          id: 1,
          resources: [
            {
              label: 'label',
              url:
                'https://id.atlassian.com/login?continue=https%3A%2F%2Finterficie.atlassian.net%2Flogin%3FredirectCount%3D1%26dest-url%3D%252Fsecure%252FRapidBoard.jspa%253FrapidView%253D45%2526projectKey%253DIBS%2526selectedIssue%253DIBS-105%26application%3Djira&application=jira',
            },
          ],
        },
        {
          name: 'subtopic 2',
          id: 2,
          resources: [
            {
              label: 'label 2',
              url: 'https://www.nbamaniacs.com/',
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
