import axios from 'axios';

const token = process.env.REACT_APP_TOKEN_API;

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
