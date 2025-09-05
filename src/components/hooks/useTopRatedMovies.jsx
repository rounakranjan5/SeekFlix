import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { addTopRatedMovies } from '../utils/movieSlice'

const useTopRatedMovies = () => {

  const dispatch=useDispatch()

  const TopRatedMovies = async () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?region=IN&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res)=>{
        console.log(res);
        dispatch(addTopRatedMovies(res.results))
      })
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    TopRatedMovies()
  },[])

}

export default useTopRatedMovies