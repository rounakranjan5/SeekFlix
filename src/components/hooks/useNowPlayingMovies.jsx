import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'

const useNowPlayingMovies = () => {

  const dispatch=useDispatch()

  const NowPlayingMovies = async () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?region=IN&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res)=>{
        console.log(res);
        dispatch(addNowPlayingMovies(res.results))
      })
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    NowPlayingMovies()
  },[])

}

export default useNowPlayingMovies