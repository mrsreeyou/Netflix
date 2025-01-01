import React, { useState } from 'react'
import './RowPost.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl} from '../../../constans/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
  const[movies,setMovies]=useState([])
  const[movieID,setMovieID]=useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };

const handleMovieTrailer=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data);
  if(response.data.results.length!=0){
    setMovieID(response.data.results[0])
  }else{
    console.log('Array emity');
    
  }
  
}).catch((error)=>{
  alert(`error: ${error}`)
})

}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map( (img,key)=>{
          
          return(
            <div>
               <img onClick={()=>{
                handleMovieTrailer(img.id)
               }} className={props.isSmall? 'smallposter': 'poster'} alt="poster" src={`${imageUrl + img.backdrop_path}`}  />
               
            </div>
          )
        } )}
       
      </div>
      <div className='youtube'>
      {movieID && <YouTube opts={opts} videoId={movieID.key}/>}
      </div>
    </div>
  )
}

export default RowPost ;
