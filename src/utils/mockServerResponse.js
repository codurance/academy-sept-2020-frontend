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
      }));
      this.post(`${BACKEND_API_URL}/topic`, (schema, request) => {
        const body = JSON.parse(request.requestBody);
        body.id = 1;
        return body;
      });
      this.patch('/contacts/:id');
    },
  });
};
