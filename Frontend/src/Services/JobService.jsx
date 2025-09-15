import axiosInstance from "../Interceptor/AxiosInterceptor"

export const postJob = async (job) => {
    console.log("Sending Job Data:", job);  // ✅ Debugging
    return axiosInstance.post(`/jobs/post`, job)
    .then(res => res.data)
    .catch(error => {
        console.error("Error in postJob:", error.response?.data || error.message);  // ✅ Debugging
        throw error;
    });
};

export const getAllJobs = async () => {
    return axiosInstance.get(`/jobs/getAll`)
    .then(res => res.data)
    .catch(error => { throw error; });
};

export const getJob = async (id) => {
    return axiosInstance.get(`/jobs/get/${id}`)
    .then(res => res.data)
    .catch(error => { throw error; });
};

export const applyJob = async (id, applicant) => {
    try {
      const response = await axiosInstance.post(`/jobs/apply/${id}`,applicant);
      return response; // Ensure this returns an object with `data`
    } catch (error) {
      throw error; // Ensure errors are properly thrown
    }
  };

  export const getJobPostedBy = async (id) => {
    try {
      const response = await axiosInstance.get(`/jobs/postedBy/${id}`);
      return response; 
    } catch (error) {
      throw error; // Ensure errors are properly thrown
    }
  };

  export const changeAppStatus = async (application) => {
    return axiosInstance.post(`/jobs/changeAppStatus`,application)
    .then (res => res.data)
    .catch(err =>{throw err;});
  } 
  


  

// import { apiRequest } from "../utils/apiHelper";

// export const postJob = async (job) => {
//   console.log("Sending Job Data:", job);  // ✅ Debugging
//   return apiRequest("POST", `/jobs/post`, job);
// };

// export const getAllJobs = async () => {
//   return apiRequest("GET", `/jobs/getAll`);
// };

// export const getJob = async (id) => {
//   return apiRequest("GET", `/jobs/get/${id}`);
// };

// export const applyJob = async (id, applicant) => {
//   return apiRequest("POST", `/jobs/apply/${id}`, applicant);
// };

// export const getJobPostedBy = async (id) => {
//   return apiRequest("GET", `/jobs/postedBy/${id}`);
// };

// export const changeAppStatus = async (application) => {
//   return apiRequest("POST", `/jobs/changeAppStatus`, application);
// };
