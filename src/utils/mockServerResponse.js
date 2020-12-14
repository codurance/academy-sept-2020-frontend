import { createServer } from 'miragejs';

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

export const serverMock = () => {
  createServer({
    routes() {
      this.get(`${BACKEND_API_URL}/learningpath`, () => ({
        learningPaths: [
          {
            name: 'AWS',
            description: 'Learn by example AWS',
            id: 1,
          },
          {
            name: 'Java',
            description: 'Learn by example Java',
            id: 2,
          },
        ],
      }));
      this.get(`${BACKEND_API_URL}/learningpath/1`, () => ({
        name: 'AWS',
        description: 'Learn by example AWS',
        id: 1,
        topics: [
          {
            name: 'first topic',
            description: 'description',
            id: 1,
          },
        ],
      }));
      this.post(`${BACKEND_API_URL}/survey`, () => {});
      this.get(`${BACKEND_API_URL}/topic/1`, () => ({
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
      }));
    },
  });
};
