import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
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
import Recommender from '../com/Recommender';

function Music() {

    // Fethin data from the server
    const[play, setPlay] = useState('block');
    const[pause , setPause] = useState("none");
    const [coutdown, setcoutdown] = useState(5);
    const[label, setLabel] = useState('')
    const audioEl = useRef();
    const song_path = useRef();
    const [src,setSrc] = useState('');
    
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
        var musicdata = MusicApi.find((item)=>item.Category===label)
        console.log(musicdata)
        var musicarr = musicdata?.music;
        var random = Math.floor(Math.random() * musicarr.length);
        var randomSongPath = musicarr[random];
        var musicname = randomSongPath.replace(`/songs/${label}/`,'').replace('.mp3','');


        function nextSong(){
            fetchData();
            random = Math.floor(Math.random() * musicarr.length);
            randomSongPath = musicarr[random];
            musicname = randomSongPath.replace(`/songs/${label}/`,'')
            let duration = audioEl.current.duration;
            console.log(audioEl.current.currentTime)
            if(audioEl.current.currentTime===duration){
                if(coutdown!==0){
                    setInterval(()=>{
          
                        setcoutdown((prev)=>{
                          if(prev===0){
                            window.location.href = "http://localhost:3000/music"
                          }
                          else return prev-1
                        })}, 1000);
                        <Recommender/>
                }
               
                
            }
            audioEl.current.currentTime = 0;
            audioEl.current.src=randomSongPath;
            audioEl.current.play();
           
        }
        

        console.log(typeof(randomSongPath))
       
       
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
                     <input type="range" min={1} max={100} value={99} className='volume-slider' />
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
                 <audio ref={audioEl} src={randomSongPath} controls>
                    {/* <source src={randomSongPath} ref={song_path} type="audio/mpeg"/> */}
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