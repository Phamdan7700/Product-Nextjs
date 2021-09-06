import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.API_SERVER,
});

export default axiosClient;
