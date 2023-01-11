import React, { useRef, useState } from 'react'
import './body.css'
import Header from './Header'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import  PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MusicApi from '../MusicApi';
import SongRow from './SongRow'
import { useEffect } from 'react';

function useInterval(callback, delay) {
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    const interval = setInterval(callback, delay);
    setIntervalId(interval);

    return () => {
        clearInterval(intervalId);
    };
  }, [callback, delay]);
}
export default function Body({label,setSongPath}) {

  const [data, setData] = useState(null);
  const [img , setImg] = useState('block');
  const imgEl = useRef();
  const visibilityEl = useRef();
  const [song,setSong] = useState(null); 
  const [intervalId, setIntervalId] = useState();
  const [fullLabel,setFullLabel] = useState(null);

  var musicdata = MusicApi.find((item)=>item.Category===label)
  
  var musicarr = musicdata?.music;
  var artistarr = musicdata?.artist;
  var thumbnailarr = musicdata?.thumbnail;
  if(song){
    setSongPath(song);
  }
  const handleVideo = () => {
    if (img === 'block') {
      setImg('none');
      visibilityEl.current.style.display = 'block';
    } else {
      setImg('block');
      // imgEl.current.style.display = 'block';
      visibilityEl.current.style.display = 'none';
    }
  }
  async function getVideo() {
    const response = await fetch('http://127.0.0.1:5000/videoapi');
    const json = await response.json();
    const resString = JSON.stringify(json);
    console.log(typeof(resString));
    setFullLabel( resString);

  }
  getVideo();
  // console.log(videoApi);

  useInterval(async () => {

  }, 1000); // Fetch data every 1 second

  return (
   
    <div className='body'>
      <Header />
      <div className="body-info">
        <img src='' alt="" />

        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
            </div>

      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledOutlined className='body-shuffle' />
          <FavoriteBorderIcon fontSize='large'/>  
          </div>
          {musicarr.map((item,idx)=>(
            <SongRow songName={item.replace(`/songs/${label}/`,'').replace('.mp3','')} songPath={item} setSong={setSong}  artist={artistarr[idx]} category={label} thumbnail={thumbnailarr[idx]} />
          ))}
          </div>
          <div className="body-video">
            
          <img src="http://127.0.0.1:5000/video" style={{display:img}} ref={imgEl} ></img>
          <div className="body-video-btn">
          <VisibilityOffIcon onClick={()=>{
            handleVideo();
          }} className='body-video-visibility' ref={visibilityEl} />
            <div className='full-label'>{fullLabel}</div>
          <RemoveRedEyeIcon onClick={handleVideo}  className='body-video-visibility-off'/>
          </div>
          </div>
      </div>
    
  )
}
