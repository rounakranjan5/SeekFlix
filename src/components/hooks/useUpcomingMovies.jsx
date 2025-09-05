import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = () => {

  const dispatch=useDispatch()

  const upcomingMovies = async () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?region=IN&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res)=>{
        console.log(res);
        dispatch(addUpcomingMovies(res.results))
      })
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    upcomingMovies()
  },[])

}

export default useUpcomingMovies