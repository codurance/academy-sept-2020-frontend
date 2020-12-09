import { apiCall } from '../utils/apiCall';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const sendSurveyData = async (body) => {
  const { error } = await apiCall(`${BACKEND_API_URL}/survey`, {
    method: 'POST',
    auth: true,
    body,
  });

  return error;
};

export default sendSurveyData;
