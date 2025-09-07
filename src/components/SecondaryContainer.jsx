import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  let movies=useSelector(state=>state.movies)
  return (
    <div className='bg-black '>
      <div className='-mt-40 md:-mt-122 z-30 relative'>
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        </div>
        <div>
        <MovieList title={"Popular Movies"} movies={movies.popularMovie} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
        <MovieList title={"Popular Web Series"} movies={movies.popularWebSeries} />
      </div>
    </div>
  )
}

export default SecondaryContainer