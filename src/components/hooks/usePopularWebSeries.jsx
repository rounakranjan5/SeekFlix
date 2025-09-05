import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { addPopularWebSeries } from '../utils/movieSlice'

const usePopularWebSeries = () => {

  const dispatch=useDispatch()

  const popularWebSeries = async () => {
    fetch('https://api.themoviedb.org/3/tv/popular?region=IN&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res)=>{
        // console.log(res);
        dispatch(addPopularWebSeries(res.results))
      })
      .catch(err => {
        // console.error(err)
      });
  }

  useEffect(()=>{
    popularWebSeries()
  },[])

}

export default usePopularWebSeries