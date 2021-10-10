import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
