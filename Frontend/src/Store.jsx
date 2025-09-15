import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice"; // Ensure correct import path
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
import sortReducer from "./Slices/SortSlice";
import jwtReducer from "./Slices/JwtSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        profile:profileReducer,
        filter:filterReducer,
        sort:sortReducer,
        jwt:jwtReducer
    }
});

export default store;
