import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { addPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () => {

  const dispatch=useDispatch()

  const PopularMovies = async () => {
    fetch('https://api.themoviedb.org/3/movie/popular?region=IN&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res)=>{
        console.log(res);
        dispatch(addPopularMovies(res.results))
      })
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    PopularMovies()
  },[])

}

export default usePopularMovies