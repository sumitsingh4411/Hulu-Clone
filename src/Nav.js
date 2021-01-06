import React from 'react'
import "./Nav.css"
import request from "./request"
function Nav({fetselected}) {
    return (
        <div className="nav">
        <h2 onClick={()=> fetselected(request.fetchTrending)}>Trending</h2>
        <h2 onClick={()=> fetselected(request.fetchTopRated)}>Top rated</h2>
        <h2 onClick={()=> fetselected(request.fetchActionMovies)}>Action</h2>
        <h2 onClick={()=> fetselected(request.fetchComedyMovies)}>comedy</h2>
        <h2 onClick={()=> fetselected(request.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick={()=> fetselected(request.fetchRomanceMovies)}>Romance</h2>
        <h2 onClick={()=> fetselected(request.fetchHorrorMovies)}>Mystery</h2>
        <h2 onClick={()=> fetselected(request.fetchNetflixOriginals)}>Sci-fi</h2>
        <h2 onClick={()=> fetselected(request.fetchTrending)}>western</h2>
        <h2 onClick={()=> fetselected(request.fetchComedyMovies)}>animation</h2>
        <h2 onClick={()=> fetselected(request.fetchDocumentaries)}>movie</h2>

        </div>
    )
}

export default Nav
