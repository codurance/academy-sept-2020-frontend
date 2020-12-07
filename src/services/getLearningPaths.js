import { apiCall } from '../utils/apiCall';
import { getLearningPathsMock } from '../utils/mockServerResponse';

getLearningPathsMock();

const getLearningPaths = async () => {
  const { error, data } = await apiCall(`/learningpaths`, {
    auth: true,
    method: 'GET',
  });

  return { error, data };
};

export default getLearningPaths;
