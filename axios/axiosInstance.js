import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: process.env.SERVER,
   timeout: 1000 * 40, // Wait for 40 seconds
   headers: {
      'Content-Type': 'Application/json'
   }
});



export default axiosInstance;
