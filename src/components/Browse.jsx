import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from './hooks/usePopularMovies'
import useTopRatedMovies from './hooks/useTopRatedMovies'
import useUpcomingMovies from './hooks/useUpcomingMovies'
import usePopularWebSeries from './hooks/usePopularWebSeries'
import { useSelector } from 'react-redux'
import AiSearch from './AiSearch'

const Browse = () => {

  const showAisearch=useSelector(state=>state.seekAi.showAisearch)
  console.log(showAisearch);

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  usePopularWebSeries()

  return (

    <div>
      <div className='relative z-50'>
      <Header />
      </div>

      {
        showAisearch ? 
        ( <AiSearch/> ) :
          (
        <> 
          <MainContainer/>
          <SecondaryContainer/>
        </>
          )
      }

    </div>
  )
}

export default Browse