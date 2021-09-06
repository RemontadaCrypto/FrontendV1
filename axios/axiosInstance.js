import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: "http://ec2-3-8-139-98.eu-west-2.compute.amazonaws.com:8000/v1",
   timeout: 1000 * 40, // Wait for 40 seconds
   headers: {
      'Content-Type': 'Application/json'
   }
});



export default axiosInstance;
