import axios from 'axios';

export default axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*'
  },

  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}`
});
