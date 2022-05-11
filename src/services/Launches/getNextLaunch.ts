import api from '../api';

export default async function getNextLaunch() {
  const response = await api.get('/launches/next');
  
  return response.data;
}