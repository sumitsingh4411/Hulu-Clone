import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Result.css"
import Videocard from './Videocard'
import request from "./request"
import FlipMove from "react-flip-move"
function Result({selectedoption}) {
    const[movies,setmovies]=useState([]);
    useEffect(()=>
    {
         async function fetchdata(){
             const req=await axios.get(selectedoption);
             console.log(req);
             setmovies(req.data.results);
             return req;
         }
         fetchdata();
    },[selectedoption])
    return (
        <div className="result">
            <FlipMove>
            {
    
              movies.map((movie)=>(
                  <Videocard key={movie.id} movie={movie}/>
              ))
            }
            </FlipMove>
           
        </div>
    )
}

export default Result
