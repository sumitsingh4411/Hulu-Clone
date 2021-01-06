import React, { forwardRef } from 'react'
import "./Videocard.css"
import TextTruncate from "react-text-truncate"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const baseurl="https://image.tmdb.org/t/p/original/";

const Videocard= forwardRef(({movie},ref) =>{
    return (
        <div ref={ref} className="videocard">
             <img src={`${baseurl}${movie.backdrop_path || movie.poster_path} `}
             alt="movoe_posetr"/>
             <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
             />
             <h3>{movie.title || movie.original_name}</h3>
             <p className="videocard_p">
                 {movie.media_type && `${movie.media_type}`}
                 {movie.release_date || movie.first_air_date}{"   "}
                 <ThumbUpIcon fontSize="medium"/>{"   "}{movie.vote_count}
             </p>
        </div>
    )
})

export default Videocard;
