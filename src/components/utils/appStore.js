import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import seekAiReducer from './seekAiSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        seekAi:seekAiReducer
    }
})


export default appStore