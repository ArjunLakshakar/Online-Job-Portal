import axios from "axios"
import axiosInstance from "../Interceptor/AxiosInterceptor";

// const base_url = "http://localhost:9090/notification/";

const getNotifications = async (id)=>{
    return axiosInstance.get(`/notification/get/${id}`)
    .then(res => res.data)
    .catch(error => {throw error;});
}

const readNotifications = async (id)=>{
    return axiosInstance.put(`/notification/read/${id}`)
    .then(res => res.data)
    .catch(error => {throw error;});
}

export {getNotifications,readNotifications}


// import { apiRequest } from "../utils/apiHelper";

// export const getNotifications = async (id) => {
//   return apiRequest("GET", `/notification/get/${id}`);
// };

// export const readNotifications = async (id) => {
//   return apiRequest("PUT", `/notification/read/${id}`);
// };
