import { createServer } from 'miragejs';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

export const serverMock = () => {
  createServer({
    routes() {
      this.get(`${BACKEND_API_URL}/learningpath`, () => ({
        learningPaths: [
          {
            title: 'AWS',
            description: 'Learn by example AWS',
          },
          {
            title: 'Java',
            description: 'Learn by example Java',
          },
        ],
      }));
    },
  });
};
