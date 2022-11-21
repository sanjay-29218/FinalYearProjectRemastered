import React, { useEffect, useRef, useState } from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import Grid from '@mui/material/Grid';
import MusicApi from '../MusicApi'
export default function Footer({label,fetchData}) {

  // setting values
  const [isplaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(30);
  const [progress, setProgress] = useState(0);
  const [src,setSrc] = useState('')
  const [songName,setSongName] = useState('')

  //referencing audio element
  const audioEl = useRef();
  const playEl = useRef();
  const pauseEl = useRef();
 

    

 
  useEffect(() =>{
  const musicdata = MusicApi.find((item)=>item.Category===label)
  console.log(musicdata)
  const musicarr = musicdata?.music;
  const random = Math.floor(Math.random() * musicarr.length);
  const randomSongPath = musicarr[random];
  const musicname = randomSongPath.replace(`/songs/${label}/`,'').replace('.mp3','');
  setSrc(randomSongPath);
  setSongName(musicname);
  },[])
    
  useEffect(() =>{
    if (isplaying) {
      audioEl.current.play();
      playEl.current.style.display = 'none';
      pauseEl.current.style.display = 'block';
      
    } else {
      audioEl.current.pause();
      playEl.current.style.display = 'block';
      pauseEl.current.style.display = 'none';
    }
    console.log(label)

    },[isplaying])


    const skipPrevious = () => {}
    const handlePlayPause = () => setIsPlaying(!isplaying)
    const handleVolume = (event, newValue) => {
      setVolume(newValue);
    };
    const handleProgress = (event,newValue) =>{
      const duration = audioEl.current.duration;
      const currentTime = audioEl.current.currentTime;
  
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      if(currentTime === duration){
        nextSong();
      }

      


    }



    function nextSong(){
        fetchData();
        let musicdata = MusicApi.find((item)=>item.Category===label)
        let musicarr = musicdata?.music;
        let random = Math.floor(Math.random() * musicarr.length);
        let randomSongPath = musicarr[random];
        let songName = randomSongPath.replace(`/songs/${label}/`,'')
        setSongName(songName)
        let duration = audioEl.current.duration;
        console.log(audioEl.current.currentTime)
        // if(audioEl.current.currentTime===duration){
        //     audioEl.current.src = randomSongPath;
        //     audioEl.current.play();
        // }
        audioEl.current.currentTime = 0;
        audioEl.current.src=randomSongPath;
        audioEl.current.play();
       
    }

   
  return (
    <div className='footer'>
        <div className="footer-left">
            <img className="footer-album-logo" src="https://i.scdn.co/image/ab67616d0000b273d9b3b5c2b2b2b2b2b2b2b2b2" alt=""/>
            <div className="footer-song-info">
                <h4>{songName}</h4>
                <p>Usher</p>
            </div>
    </div>
    
        <div className="footer-center">
        <div className="footer-center-element">
        <ShuffleIcon className='footer-green'/>
        <SkipPreviousIcon onClick={skipPrevious} className='footer-icon'/>
       
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon-pause"
            ref={pauseEl}
          />

          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon-play"
            ref={playEl}
          />
          <audio src={src}  ref={audioEl}/>
        <SkipNextIcon onClick={nextSong} className='footer-icon'/>
        <RepeatIcon className='footer-green'/>
        </div>
        <Slider value={volume} onChange={handleVolume} aria-labelledby="continuous-slider" className=
                    "footer-music-slider" />
        </div>
        <div className="footer-right">
            <Grid container spacing={2} alignItems={"center"} justifyContent={'flexEnd'} className='gird'>
                <Grid item>
                    <PlaylistPlayIcon className='footer-icon'  />
                </Grid>
                   <Grid item>
                   <VolumeDown className='footer-icon' />
                   </Grid>
                <Grid item xs>
                    <Slider value={progress} onChange={handleProgress} aria-labelledby="continuous-slider" className=
                    "footer-slider" />
                </Grid>
                <Grid item>
                </Grid>
            </Grid>

        </div>
    </div>
  )
};

