import api from '../api';

export default async function getUpcomingLaunch() {
  const response = await api.post('/launches/upcoming');
  
  return response.data;
}