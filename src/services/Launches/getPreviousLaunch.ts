import api from '../api';

export default async function getPreviousLaunch() {
  const response = await api.get('/launches/previous');
  
  return response.data;
}