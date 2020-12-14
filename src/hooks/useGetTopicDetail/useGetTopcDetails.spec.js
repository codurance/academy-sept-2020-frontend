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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

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
