import React from 'react'
import { CDN_POSTER_PATH } from './utils/constants'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-48 pr-4'>
      <img alt="poster" src={CDN_POSTER_PATH+poster_path}/>
    </div>
  )
}

export default MovieCard