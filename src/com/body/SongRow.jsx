import React from 'react'
import './songrow.css'
export default function SongRow({track,playSong}) {
  const playSong = () => {}
  return (
  
    <div className='songRow' onClick={() => playSong()}>
        <img className='songRow-album' src={track.album.images[0].url} alt="" />
        <div className="song-rowinfo">
            <h1>{"name"}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}

            </p>
        </div>
    </div>
  )
}