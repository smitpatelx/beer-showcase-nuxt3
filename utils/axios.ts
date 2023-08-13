import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});

export default instance;
