import React from 'react'
import AiSearchBar from './AiSearchBar'
import MovieSuggestion from './MovieSuggestion'

const AiSearch = () => {
  return (
    <div className="min-h-screen relative">
       
        <div 
          className="fixed top-0 left-0 w-full h-full -z-10 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_small.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
        ></div>
        
        <div className="relative z-10 min-h-screen pb-16">
          <AiSearchBar/>
          <MovieSuggestion/>
        </div>
    </div>
  )
}

export default AiSearch