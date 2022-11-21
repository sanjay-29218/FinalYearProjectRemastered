import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import './music.css'
import MusicApi from '../com/MusicApi'
import axios from 'axios';
import Recommender from '../com/Recommender';
import Player from '../com/player/Player';

function Music() {
    const[label, setLabel] = useState('')
    async function fetchData(){
        const request = await axios.get('http://localhost:5000/musicapi');
        const data = await request.data;
        console.log(request.data);
        setLabel(data.playlist)

    }
    useEffect(()=>{
        fetchData();
        console.log('hello world');
        // audioEl.current.play();
    },[])
       
    // Playing and pausing the music
  if(label===''){
    return <>Loading...</>
  }
    else{
       
        return(
            <>
         <div className='music-container'>
            <Player label={label}  fetchData={fetchData} />
            </div>
            </>
      );
    }
}
// }
export default Music