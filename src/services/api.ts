import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*'
  },

  baseURL: apiUrl || `http://localhost:${process.env.REACT_APP_API_PORT}`
});
