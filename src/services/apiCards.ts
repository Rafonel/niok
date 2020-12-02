import axios from 'axios';

export default axios.create({
  baseURL: 'http://my-json-server.typicode.com/Rafonel/niok',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
