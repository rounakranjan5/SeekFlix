import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

  const movies=useSelector(state=>state.movies?.nowPlaying)

  if(!movies) return null

//   console.log("main conatiner movies : ",movies);
  const {id,title,overview}=movies[1] || movies[0]
  return (
    <div className="relative pt-0 pb-40">
        <VideoTitle movie_title={title} movie_overview={overview} />
        <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContainer