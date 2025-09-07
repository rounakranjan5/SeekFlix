import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({title,movies}) => {
  // console.log("pppp",movies);

  let showAisearch=useSelector(state=>state.seekAi.showAisearch)
  return (
    <div className='px-6 pt-4 pb-2 bg-gradient-to-t from-black via-black/90 to-transparent relative z-30'>
      <h1 className='text-xl md:text-2xl py-1 text-white font-bold'>{title}{showAisearch ? " and Related Movies" : null}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
        {
          movies && movies.map((movie)=><MovieCard key={movie?.id} poster_path={movie?.poster_path} />)
        }
        </div>
      </div>
    </div>
  )
}

export default MovieList