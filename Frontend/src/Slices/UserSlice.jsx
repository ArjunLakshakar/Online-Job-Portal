import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem, removeItem } from '../Services/LocalStorageService'; // Fixed import

// const initialState = getItem("user") || null; // Ensure initial state is not undefined
const initialState = getItem("user") ? getItem("user") : null;
// const initialState = getItem("user") || {}; // ✅ Ensure it doesn't return `undefined`

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            setItem("user", action.payload);
            state = getItem("user");
            return state;
        },
        removeUser: (state) => {
            removeItem("user");
            removeItem("token");
            localStorage.removeItem('user');  // ✅ Ensure correct key is removed
            localStorage.removeItem('token');
            state = null;
            return state; 
        }
    }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;










// import { createSlice } from '@reduxjs/toolkit';
// import { getItem, setItem, removeItem } from '../Services/LocalStorageService'; // Fixed import

// const initialState = getItem("user") || null; // Ensure initial state is not undefined

// const UserSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             setItem("user", action.payload);
//             return action.payload; // Directly return the new state
//         },
//         removeUser: () => {
//             removeItem("user");
//             removeItem("token");    
//             return null; // Set state to null when removing user
//         }
//     }
// });

// export const { setUser, removeUser } = UserSlice.actions;
// export default UserSlice.reducer;
