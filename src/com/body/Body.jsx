import React from 'react'
import './body.css'
import Header from './Header'
import  PlayCircleFilledOutlined from '@mui/icons-material/PlayCircleFilledOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SongRow from './SongRow'
export default function Body({spotify}) {
  return (
   
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body-info">
        <img src='' alt="" />

        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
            </div>

      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledOutlined className='body-shuffle' onClick={playSong}/>
          <FavoriteBorderIcon fontSize='large'/>  
          </div>
          {discover_weekly?.tracks.items.map(item => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
          </div>
      </div>
    
  )
}
