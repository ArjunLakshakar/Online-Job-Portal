import axios from "axios";
import { removeUser } from "../Slices/UserSlice";

const axiosInstance = axios.create({
    baseURL: "http://localhost:9090",  // ✅ Make sure this matches your backend
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

// Add a request interceptor (if required)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');  // ✅ Ensure token is stored
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }else {
            delete config.headers.Authorization; // ✅ Remove header if no token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const setupResponseInterceptor=(navigate, dispatch)=>{
    axiosInstance.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error) => {
            if(error.response?.status === 401){
                // localStorage.removeItem("token"); // ✅ Clear token on 401
                // dispatch(removeUser()); // ✅ Reset user state in Redux
                navigate("/login"); // ✅ Redirect to login
            }
            return Promise.reject(error);
        }
    );
}

export default axiosInstance;
