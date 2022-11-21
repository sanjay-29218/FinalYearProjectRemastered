import React from 'react'
import './songrow.css'
export default function SongRow({songName,artist,category}) {
  const playSong = () => {}
  return (
  
    <div className='songRow' onClick={() => playSong()}>
        <img className='songRow-album' src='' alt="" />
        <div className="song-rowinfo">
          <h1>{songName}</h1>
            <h3>{artist}</h3>
        </div>
        <h3>{category}</h3>
    </div>
  )
}
