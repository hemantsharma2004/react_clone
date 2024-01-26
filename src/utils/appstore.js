import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../utils/userSlice"
import movieReducer from "../utils/movieSLice"

const AppStore=configureStore({
       reducer:{
           user:userReducer,
           movies:movieReducer,
       }
    })
    
export default AppStore;