import React, { useRef, useState } from 'react'
import './body.css'
import Header from './Header'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import  PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MusicApi from '../MusicApi';
import SongRow from './SongRow'
export default function Body({label,setSongPath}) {
  const [img , setImg] = useState('block');
  const imgEl = useRef();
  const visibilityEl = useRef();
  const [song,setSong] = useState(null); 
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
  return (
   
    <div className='body'>
      <Header />
      <div className="body-info">
        <img src='' alt="" />

        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>Hello</p>
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

          <RemoveRedEyeIcon onClick={handleVideo}  className='body-video-visibility-off'/>

          </div>
          </div>
      </div>
    
  )
}
