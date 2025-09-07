import React, { useEffect } from 'react'
import { API_OPTIONS } from './utils/constants';
import { addMovieTrailer } from './utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from './hooks/useMovieTrailer';


const VideoBackground = ({ movie_id }) => {

    //   let [trailerId, setTrailerId] = React.useState(null);

    const trailerVideo = useSelector(state => state.movies?.movieTrailer)

    useMovieTrailer(movie_id)

    return (
        <div className='w-screen'>
            <iframe
                className="w-screen aspect-video "
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&disablekb=1&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; "
                allowFullScreen
            ></iframe>

        </div>
    )
}

export default VideoBackground