import api from '../api';

export default async function getLatestLaunch() {
  const response = await api.post('/launches/latest');
  
  return response.data;
}