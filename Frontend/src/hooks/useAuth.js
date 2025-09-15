// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { jwtDecode } from "jwt-decode";
// import { getProfile } from "../Services/ProfileService";
// import { setProfile } from "../Slices/ProfileSlice";
// import { setUser } from "../Slices/UserSlice";

// const useAuth = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   // Handle token decoding
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         dispatch(setUser({ ...decoded, email: decoded.sub }));
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token"); // Remove invalid token
//       }
//     }
//   }, [dispatch]);

//   // Fetch profile when user ID is available
//   useEffect(() => {
//     if (!user?.id) return;

//     getProfile(user.id)
//       .then((data) => dispatch(setProfile(data)))
//       .catch((error) => console.error("Error fetching profile:", error));
//   }, [user?.id, dispatch]);

//   return { user };
// };

// export default useAuth;
