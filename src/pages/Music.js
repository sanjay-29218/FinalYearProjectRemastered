import React, { useRef, useState, useEffect } from 'react'
import './music.css'
import MusicApi from '../com/MusicApi'
import Nav from '../com/Nav'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillVolumeOffFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import {SlPlaylist} from 'react-icons/sl'
import ReactAudioPlayer from 'react-audio-player';

function Music() {


    const[play, setPlay] = useState('block');
    const[pause , setPause] = useState("none");
    const audioEl = useRef();
    const[isPlaying , setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(MusicApi[0]);
  
  return (
     <div className='music-container'>
         <Nav/>
         <div className="image"></div>
         <div className="music-player">
             <div className="slider-container">
             <div className="music-name">Playing X of y</div>
             <div className="current-time">00:00</div>
             {/* <input type="range" min={1} max={100} value={0} className='seek-slider' /> */}
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
             {/* <div className="progress-bar"></div> */}
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
                 <div className="next-btn"  onClick=''><GiNextButton/></div>
                     </div>
             <audio controls ref={audioEl}>
                <source src={currentSong.music[0]} type="audio/ogg" />
            </audio>
             </div>
     </div>
    </div>
  
  );
  
}

export default Music