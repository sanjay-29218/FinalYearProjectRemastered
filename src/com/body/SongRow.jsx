import React from 'react'
import './songrow.css'
import MusicApi from '../MusicApi'
export default function SongRow({songName,artist,category,thumbnail,songPath,setSong}) {
  const playSong = (songPath) => {
    setSong(songPath);
    console.log(songPath);
  }
  return (
  
    <div className='songRow' onClick={() => playSong(songPath)}>
        <img className='songRow-album' src={thumbnail} alt="" />
        <div className="song-rowinfo">
          <h1>{songName}</h1>
        </div>
            <h3>{artist}</h3>
        <h3>{category}</h3>
    </div>
  )
}
