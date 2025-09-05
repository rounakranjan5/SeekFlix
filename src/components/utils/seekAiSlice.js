import { createSlice } from "@reduxjs/toolkit";

const seekAiSlice=createSlice({
    name:"seekAi",
    initialState:{
        showAisearch:false,
        geminiRecommendations:null,
        TMDBMovieResults:null
    },
    reducers:{
        toggleAiSearch:(state)=>{
            state.showAisearch=!state.showAisearch
        },

        addGeminiRecommendations:(state,action)=>{
            const {geminiRecommendations,TMDBMovieResults}=action.payload
            state.TMDBMovieResults=TMDBMovieResults
            state.geminiRecommendations=geminiRecommendations
        }
    }
})

export const {toggleAiSearch,addGeminiRecommendations}=seekAiSlice.actions
export default seekAiSlice.reducer