const { serverMock } = require('../../utils/mockServerResponse');

describe.skip('getLearningPaths should', () => {
  test('retrieve an array with lerningpaths', async () => {
    serverMock();
    const expectedData = {
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
    };
    const { error, data } = await getLearningPaths();
    expect(error).toBe(undefined);
    expect(data).toEqual(expectedData);
  });
});
