import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';

const useMovieTrailer = (movie_id) => {
  const dispatch=useDispatch()  

//   console.log(movie_id);

  const getMovieVideo=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);
    const json=await data.json();
    // console.log("video movie", json);

    const vid=json.results.filter((video)=> video.type==='Trailer')
    // console.log("vid",vid);

    const trailer=vid.length ? vid[0] : json.results[0];
    // console.log(trailer);
    // console.log(trailer.key);
    // setTrailerId(trailer.key);
    dispatch(addMovieTrailer(trailer))
  }

  useEffect(()=>{
    getMovieVideo()
  },[])

//   console.log("trailer video from store : ",trailerVideo);
//   console.log("trailer video's key from store : ",trailerVideo.key);
}

export default useMovieTrailer