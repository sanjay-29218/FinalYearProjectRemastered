import React, { useRef, useState, useEffect, useMemo } from 'react'
import './music.css'
import MusicApi from '../com/MusicApi'
import Nav from '../com/Nav'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillVolumeOffFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import {SlPlaylist} from 'react-icons/sl'
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';

function Music() {

    // Fethin data from the server
    const[play, setPlay] = useState('block');
    const[pause , setPause] = useState("none");
    const[label, setLabel] = useState('')
    const audioEl = useRef();
  
        async function fetchData(){
            const request = await axios.get('http://localhost:5000/musicapi');
            const data = await request.data;
            console.log(request.data);
            setLabel(data.playlist)
        }
        fetchData();

        
  

    // fetching label data for next song
    
        //   async function nextSong(){
        //     const request = await axios.get('http://localhost:5000/musicap');
        //     console.log(request.data)
        //     const data = await request.data;
        //     const label = data.folder;
        //   }


   

    

    // Playing and pausing the music
  if(label===''){
    return <>Loading...</>
  }
//    else if(Object.keys(currentSongs.labels).length===0) {
//     return <>Labels not found</>
//     }
//     else{
//         function maxValue() {
//             return  Math.max(...Object.values(currentSongs.labels));
//             // console.log(Object.values(currentSongs.labels))
//             }
//             const max = maxValue();
//             const label = Object.keys(currentSongs.labels).find((key)=>currentSongs.labels[key]===max)
    else{
        return(
            <>
         <div className='music-container'  >
             <Nav/>
            <img src="http://127.0.0.1:5000/video" style={{width:"100vw",height:'100vh',position:'absolute',filter: "blur(2px)"}}></img>
             <div className="image" ></div>
             <div className="music-player" >
                 <div className="slider-container">
                 <div className="music-name">{
                   MusicApi.find((item)=>item.Category===label).music[0]
                 }</div>
                 <div className="current-time">00:00</div>
                 </div>
                 <div className="slider-container">
                     <div className="vol-down"><BsFillVolumeOffFill/></div>
                     <input type="range" min={1} max={100} value={99} className='volume-slider' onChange='' />
                     <div className="vol-up"><BsFillVolumeUpFill/></div>
                 </div>
                 <div className="track-info">
                     <div className="track-name">Track Name</div>
                     <div className="track-artist">Track Artist</div>
                 </div>
                 <div className="playlisticon"><SlPlaylist/></div>
                 <div className="music-img"></div>
                 <div className="music-btn">
                         <div className="imported-btn">
                         <div className="prev-btn"  onClick={()=>{
    
                         }} ><GiPreviousButton/></div>
                         <div className="play-btn" style={{display:play}} onClick={()=>{
                         audioEl.current.play()
                         setPlay('none');
                         setPause('block');
                     }}><BsFillPlayCircleFill/></div>
                     <div className="pause-btn" style={{display:pause}} onClick={()=>{
                        audioEl.current.pause()
                         setPlay('block');
                         setPause('none');
                        
                     }}><AiFillPauseCircle /></div> 
                     <div className="next-btn"  onClick={fetchData}><GiNextButton/></div>
                         </div>
                 <audio controls ref={audioEl}>
                    <source src={ MusicApi.find((item)=>item.Category===label).music[0]} type="audio/mp3" autoplay />
                </audio>
                 </div>
         </div>
        </div>
      
            
            </>
      );
    }
}
// }
export default Music