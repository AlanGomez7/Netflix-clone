import React, { useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../axios';
import {IMAGE_URL} from '../../constants'

function RowPost(props) {
  let [movies, storeMovies]=useState([])
  useEffect(() => {
    axios.get(props.url).then(response =>{console.log(response.data); storeMovies(response.data.results)})
  },[])
  

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((movie)=>
              <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${IMAGE_URL+movie.backdrop_path}`} alt='Poster' />
            )
          }
        </div>
    </div>
  )
}

export default RowPost