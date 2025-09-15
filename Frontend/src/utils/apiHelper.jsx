// import axios from "axios";

// const API_BASE_URL = "http://localhost:8082";

// export const apiRequest = async (method, endpoint, data = null, params = {}) => {
//   try {
//     const token = localStorage.getItem("Token"); // Get token from localStorage

//     const config = {
//       method,
//       url: `${API_BASE_URL}${endpoint}`,
//       headers: {
//         "Content-Type": "application/json",
//         ...(token && { Authorization: `Bearer ${token}` }) // Attach token if available
//       },
//       data,
//       params
//     };

//     const response = await axios(config);
//     return response.data;
//   } catch (error) {
//     console.error("API Error:", error.response?.data || error.message);
//     throw error;
//   }
// };



import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:8082", // Change to your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor: Automatically attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Fetch token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => response, // Just return response if no error
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      if (error.response.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;

