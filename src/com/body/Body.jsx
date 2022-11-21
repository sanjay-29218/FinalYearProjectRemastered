import React from 'react'
import './body.css'
import Header from './Header'
import  PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MusicApi from '../MusicApi';
import SongRow from './SongRow'
export default function Body({label}) {
  var musicdata = MusicApi.find((item)=>item.Category===label)
  var musicarr = musicdata?.music;
  var artistarr = musicdata?.artist;
  const playSong = () => {}
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
          <PlayCircleFilledOutlined className='body-shuffle' onClick={playSong}/>
          <FavoriteBorderIcon fontSize='large'/>  
          </div>
          {/* {discover_weekly?.tracks.items.map(item => (
            <SongRow playSong={playSong} track={item.track} />
          ))} */}
          {musicarr.map((item,idx)=>(
            <SongRow songName={item.replace(`/songs/${label}/`,'').replace('.mp3','')}  artist={artistarr[idx]} category={label} />
          ))}
          </div>
          <div className="body-video">
          <img src="http://127.0.0.1:5000/video" ></img>
            
          </div>
      </div>
    
  )
}
