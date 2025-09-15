import axios from "axios"
import { removeUser } from "../Slices/UserSlice";
import { useDispatch } from "react-redux";
const base_url = "http://localhost:9090/auth/";


const loginUser = async (login) => {
  try {
    const response = await axios.post(`${base_url}login`, login);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}

// const navigateToLogin = (navigate)=>{
//   localStorage.removeItem('token');
//   // localStorage.removeItem('user');
//   removeUser();
//   navigate("/login");
// }

const navigateToLogin = (navigate, dispatch) => {
  localStorage.removeItem("token");
  dispatch(removeUser()); // ✅ Correct way to use Redux actions
  navigate("/login");
};


export{loginUser, navigateToLogin}