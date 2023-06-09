import axios from 'axios';

export const baseRouter = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  responseType: 'json',
});
