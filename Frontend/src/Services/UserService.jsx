import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (user) => {
  try {
    const response = await axiosInstance.post(`/users/register`, user);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const loginUser =async(login) =>{
    return axiosInstance.post(`/users/login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const sendOtp =async(email) =>{
  return axiosInstance.post(`/users/sendOtp/${email}`)
  .then(res=>res.data)
  .catch(error=>{throw error;});
}

const verifyOtp =async(email,otp) =>{
  return axiosInstance.get(`/users/verifyOtp/${email}/${otp}`)
  .then(res=>res.data)
  .catch(error=>{throw error;});
}

const changePass =async(email,password) =>{
  return axiosInstance.post(`/users/changePass`,{email,password})
  .then(res=>res.data)
  .catch(error=>{throw error;});
}
export {registerUser,loginUser,verifyOtp,changePass,sendOtp}


// import { apiRequest } from "../utils/apiHelper";

// export const registerUser = async (user) => {
//   return apiRequest("POST", "/users/register", user);
// };

// export const loginUser = async (login) => {
//   return apiRequest("POST", "/users/login", login);
// };

// export const sendOtp = async (email) => {
//   return apiRequest("POST", `/users/sendOtp/${email}`);
// };

// export const verifyOtp = async (email, otp) => {
//   return apiRequest("GET", `/users/verifyOtp/${email}/${otp}`);
// };

// export const changePass = async (email, password) => {
//   return apiRequest("POST", "/users/changePass", { email, password });
// };
