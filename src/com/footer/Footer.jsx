import React, { useEffect, useState } from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import Grid from '@mui/material/Grid';
import { useDataLayerValue } from '../../DataLayer'
export default function Footer({spotify}) {
    const [value, setValue] = useState(30);
   
      };
  return (
    <div className='footer'>
        <div className="footer-left">
            <img className="footer-album-logo" src="https://i.scdn.co/image/ab67616d0000b273d9b3b5c2b2b2b2b2b2b2b2b2" alt=""/>
            <div className="footer-song-info">
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
    </div>
    
        <div className="footer-center">
        <ShuffleIcon className='footer-green'/>
        <SkipPreviousIcon onClick={skipPrevious} className='footer-icon'/>
       
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon"
          />

          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon"
          />
        <SkipNextIcon onClick={skipNext} className='footer-icon'/>
        <RepeatIcon className='footer-green'/>
        </div>
        <div className="footer-right">
            <Grid container spacing={2} alignItems={"center"} justifyContent={'flexEnd'} className='gird'>
                <Grid item>
                    <PlaylistPlayIcon className='footer-icon' />
                </Grid>
                   <Grid item>
                   <VolumeDown className='footer-icon' />
                   </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" className=
                    "footer-slider" />
                </Grid>
                <Grid item>
                </Grid>
            </Grid>

        </div>
    </div>
  )

