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
    // const [src,setSrc] = useState('')
    // const [mname , setMname] = useState('')

        
        useEffect(() =>{
            async function fetchData(){
                const request = await axios.get('http://localhost:5000/musicapi');
                const data = await request.data;
                console.log(data.playlist);
                setLabel(data.playlist);
            }
            fetchData(); 
        },[])
        // generating random song
        

       
    // Playing and pausing the music
  if(label===''){
    return <>Loading...</>
  }
    else{
        function randomSong(){
            const musicarr = MusicApi.find((item)=>item.Category===label).music 
            const random = Math.floor(Math.random() * musicarr.length);
            return  musicarr[random];
        }
        const randomSongPath = randomSong();
        function musicName(randomSongpath,label){
            return randomSongpath.replace(`/songs/${label}/`,'')
        }
        const musicname = musicName(randomSongPath,label)

        async function nextSong(){
            const response = await axios.get('http://localhost:5000/musicapi');
            const data = await response.data;
            const label = data.playlist;
            const musicarr = MusicApi.find((item)=>item.Category===label).music
            const random = Math.floor(Math.random() * musicarr.length);
            const randomSongPath = musicarr[random];
            const musicname = randomSongPath.replace(`/songs/${label}/`,'')
            return musicname;
        }

        return(
            <>
         <div className='music-container'  >
             <Nav/>
            <img src="http://127.0.0.1:5000/video" style={{width:"100vw",height:'100vh',position:'absolute',filter: "blur(2px)"}}></img>
             <div className="image" ></div>
             <div className="music-player" >
                 <div className="slider-container">
                 <div className="music-name">{musicname}</div>
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
                     <div className="next-btn"  onClick={()=>{nextSong()}}><GiNextButton/></div>
                         </div>
                 <audio controls ref={audioEl} >
                    <source src={randomSongPath} type="audio/mp3"  />
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