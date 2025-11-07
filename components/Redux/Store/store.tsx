import { configureStore } from "@reduxjs/toolkit";
import foodAPI from "@/components/Redux/Feature/Food/foodAPI";
import userAPI from "@/components/Redux/Feature/User/userAPI";
import authReducer from "@/components/Redux/Feature/User/authSlice"


export const store=configureStore({
    reducer:{
   [foodAPI.reducerPath]:foodAPI.reducer,
   [userAPI.reducerPath]:userAPI.reducer,
   auth:authReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(foodAPI.middleware,userAPI.middleware)
})