import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MovieSuggestion = () => {
    const { geminiRecommendations, TMDBMovieResults } = useSelector(state => state.seekAi)
    
    // console.log("geminiRecommendations:", geminiRecommendations);
    // console.log("TMDBMovieResults:", TMDBMovieResults);
    
    if (!geminiRecommendations || !TMDBMovieResults) return null
    
    return (
        <div className="p-4 m-4 bg-gray-900 text-white ">
            {
                geminiRecommendations.map((movie, index) => {
                    return <MovieList 
                        key={movie} 
                        title={movie} 
                        movies={TMDBMovieResults[index]} 
                    />
                })
            }
        </div>
    )
}

export default MovieSuggestion