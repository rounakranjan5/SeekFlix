import React from 'react'

const VideoTitle = ({movie_title,movie_overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white py-[10%] md:py-[17%] px-10 bg-gradient-to-r from-black to-transparent z-20'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie_title}</h1>
        <p className='w-1/3 mt-3 hidden md:block'>{movie_overview}</p>
        <div className='mt-20 md:mt-5'>
            <button className='bg-white text-black font-bold py-3 px-5 md:px-6 rounded-lg cursor-pointer hover:opacity-50'><i class="fa-solid fa-play"></i>&nbsp;&nbsp;Play</button>
            <button className='bg-gray-500 text-black font-bold py-3 px-4 md:px-6 rounded-lg mx-5 cursor-pointer hover:opacity-100'><i class="fa-solid fa-circle-info"></i>&nbsp;&nbsp;More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle