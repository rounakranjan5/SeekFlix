import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        movieTrailer:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        popularWebSeries:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying=action.payload
        },

        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        },

        addPopularMovies:(state,action)=>{
            state.popularMovie=action.payload
        },

        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie=action.payload
        },
        
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovie=action.payload
        },

        addPopularWebSeries:(state,action)=>{
            state.popularWebSeries=action.payload
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addPopularWebSeries}=movieSlice.actions
export default movieSlice.reducer