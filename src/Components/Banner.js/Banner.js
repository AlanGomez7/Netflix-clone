import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios'
import {API_KEY, apiBaseUrl, IMAGE_URL} from '../../constants'

function Banner() {
  let [movies, setMovies]=useState([])
  useEffect(() =>{
    axios.get(`${apiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>setMovies(response.data.results[2]))
  }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${movies ? IMAGE_URL + movies.backdrop_path : ''})`}}>
        <div className='content'>
          <h1 className='title'>{movies.title}</h1>
          <div className='banner_btns'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movies.overview}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner