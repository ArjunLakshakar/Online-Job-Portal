import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../Services/LocalStorageService'; // Fixed import

const initialState = localStorage.getItem("token") || ""; // Use getItem instead of direct localStorage

const jwtSlice = createSlice({
    name: "jwt",
    initialState, 
    reducers: {
        setJwt: (state, action) => {
            localStorage.setItem("token",action.payload)
            state=action.payload ;
            return state;
        },
        removeJwt: (state) => {
            localStorage.removeItem("token");
            state='';
            return state; 
        }
    }
});

// const jwtSlice = createSlice({
//     name: "jwt",
//     initialState, 
//     reducers: {
//         setJwt: (state, action) => {
//             localStorage.setItem("token", action.payload);
//             state.token = action.payload; // ✅ Correct way to mutate state
//         },
//         removeJwt: (state) => {
//             localStorage.removeItem("token");
//             state.token = ""; // ✅ Correct way to mutate state
//         }
//     }
// });

export const { setJwt, removeJwt } = jwtSlice.actions;
export default jwtSlice.reducer;
