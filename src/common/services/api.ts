import axios from "axios";

export const apiService = ({
  Authorization = '',
  baseURL = 'https://api.github.com',
}) => {
  return axios.create({ baseURL, headers: { Authorization: `Bearer ${Authorization}` } });
}