import React, { useRef } from 'react'
import ai from './utils/gemini'
import { API_OPTIONS } from './utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addGeminiRecommendations } from './utils/seekAiSlice'

const AiSearchBar = () => {

  let searhInp=useRef(null)

  let dispatch=useDispatch()
  let geminiRecommendations=useSelector(state=>state.seekAi)

  async function searchInTMDB(movieName){
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&region=IN&page=1`, API_OPTIONS)

    const json=await data.json()

    return json.results

  }
  
  async function handleSearch(){
    // console.log(searhInp.current.value);
    const searchQuery = searhInp.current.value.trim();
    if (!searchQuery) return;

    const geminiQuery="Act as a movie recommendation engine and suggest some movies to watch based on the following query : "+searchQuery+" . suggest 5 movies only in comma separated format without any description or additional text for eg : Gadar, Sholay, Inception, Interstellar, The Dark Knight"

    try {
      const geminiResults = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: geminiQuery,
      });
      // console.log(geminiResults.text);

      let geminiResultsArr = geminiResults.text.split(",").map(movie => movie.trim());

      let movieNames = geminiResultsArr.map((movie) => searchInTMDB(movie));
      let finalMovieNames = await Promise.all(movieNames);

      // console.log("movie names TMDB Fetch : ", finalMovieNames);

      // Here's the fix - you need to dispatch the action, not just call the action creator
      dispatch(addGeminiRecommendations({
        geminiRecommendations: geminiResultsArr,
        TMDBMovieResults: finalMovieNames
      }));

      // console.log("Dispatched to Redux store!");
    } catch (error) {
      // console.error("Error in search process:", error);
    }
  }

  return (
    <div className='pt-[7%] flex justify-center'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }} className='p-2 m-6 bg-black bg-opacity-70 w-1/2 grid grid-cols-12 text-white rounded-lg shadow-lg border border-gray-800'>
            <input 
              ref={searhInp}
              type='text' 
              placeholder='What do you want to watch today?' 
              className='p-4 m-2 col-span-9 bg-gray-900 rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-400' 
            />
            <button 
              onClick={handleSearch}
              type='submit' 
              className='rounded-r-lg bg-purple-900 hover:bg-purple-800 text-white font-medium py-2 px-4 m-2 cursor-pointer col-span-3 flex items-center justify-center'
            >
             <i className="fa-solid fa-magnifying-glass"></i>
             &nbsp;
              Search
            </button>
        </form>
       
    </div>
    
  )
}

export default AiSearchBar