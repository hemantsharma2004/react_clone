import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
     name:"movie",
     initialState:{ 
        NowPlayingMovies : null,
       
     },

     reducers:{
         addMovie:(state,action)=>{
             state.NowPlayingMovies= action.payload;
         }
     }
})

export const { addMovie }= MovieSlice.actions;
export default MovieSlice.reducer;