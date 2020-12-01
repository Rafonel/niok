import axios from 'axios';

const apiCards = axios.create({
  baseURL: 'http://my-json-server.typicode.com/Rafonel/niok',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiCards.get('/cards');
  },
};
