import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../Slices/UserSlice";

const AuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(removeUser());
    }
  }, [dispatch]);

  return null;
};

export default AuthCheck;
