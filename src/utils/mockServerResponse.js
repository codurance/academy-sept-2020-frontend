import { createServer } from 'miragejs';

export const getLearningPathsMock = () => {
  createServer({
    routes() {
      this.get('/learningpaths', () => ({
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
