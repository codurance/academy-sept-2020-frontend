import { apiCall } from '../utils/apiCall';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const getLearningPaths = async () => {
  const { error, data } = await apiCall(`${BACKEND_API_URL}/learningpath`, {
    auth: true,
    method: 'GET',
  });

  return { error, data };
};

export default getLearningPaths;
