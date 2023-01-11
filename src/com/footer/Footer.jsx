import React, { useEffect, useRef, useState } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import Grid from "@mui/material/Grid";
import MusicApi from "../MusicApi";
export default function Footer({ label, fetchData, songPath }) {
  // setting values
  const [isplaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [progress, setProgress] = useState(0);
  
  const [src, setSrc] = useState("");
  const [songName, setSongName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [artist, setArtist] = useState("");
  const [footerBackground, setFooterBackground] = useState('#f2f2f2');
  //referencing audio element
  const audioEl = useRef();
  const playEl = useRef();
  const pauseEl = useRef();

  useEffect(() => {
    const musicdata = MusicApi.find((item) => item.Category === label);
    console.log(musicdata);
    const musicarr = musicdata?.music;
    const artistarr = musicdata?.artist;
    const random = Math.floor(Math.random() * musicarr.length);
    const randomSongPath = musicarr[random];
    const thubnailarr = musicdata?.thumbnail;
    const thumbnail = thubnailarr[random];
    const musicname = randomSongPath
      .replace(`/songs/${label}/`, "")
      .replace(".mp3", "");
    setSrc(randomSongPath);
    setSongName(musicname);
    setThumbnail(thumbnail);
    setArtist(artistarr[random]);
  }, []);

  useEffect(() => {
    if (isplaying) {
      audioEl.current.play();
      playEl.current.style.display = "none";
      pauseEl.current.style.display = "block";
    } else {
      audioEl.current.pause();
      playEl.current.style.display = "block";
      pauseEl.current.style.display = "none";
    }
    console.log(label);
  }, [isplaying]);

  const skipPrevious = () => {};
  const handlePlayPause = () => setIsPlaying(!isplaying);
  const handleVolume = (event, newValue) => {
    audioEl.current.volume = newValue / 100;
    setVolume(newValue);
  };

  const handleProgress = (event, newValue) => {
    const duration = audioEl.current.duration;
    const currentTime = audioEl.current.currentTime;

    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    if (currentTime === duration) {
      nextSong();
    }
  };

  const handleSeeker = (e, newValue) => {
    let duration = audioEl.current.duration;
    audioEl.current.currentTime = (newValue * duration) / 100;
    setProgress(newValue);
  };

  function nextSong() {
    fetchData();
    let musicdata = MusicApi.find((item) => item.Category === label);
    let musicarr = musicdata?.music;
    let random = Math.floor(Math.random() * musicarr.length);
    let randomSongPath = musicarr[random];
    let songName = randomSongPath
      .replace(`/songs/${label}/`, "")
      .replace(".mp3", "");
    const thubnailarr = musicdata?.thumbnail;
    const thumbnail = thubnailarr[random];
    const artistarr = musicdata?.artist;
    setSongName(songName);
    setThumbnail(thumbnail);
    setArtist(artistarr[random]);
    let duration = audioEl.current.duration;
    console.log(audioEl.current.currentTime);
    audioEl.current.currentTime = 0;
    audioEl.current.src = randomSongPath;
    audioEl.current.play();
  }
  useEffect(() => {
    if (songPath) {
      setSrc(songPath);
      let songName = songPath
        .replace(`/songs/${label}/`, "")
        .replace(".mp3", "");
      setSongName(songName);
      audioEl.current.src = songPath;
      audioEl.current.play();
      setIsPlaying(!isplaying);
    }
  }, [songPath]);
useEffect(()=>{
  if(label==='Happy'){
    setFooterBackground('#54fffb')
  }
  else if(label==='Sad'){
    setFooterBackground('#2c345c')
  }
  else {
    setFooterBackground('#d6d0c8')
  }
  
},[label])
  return (
    <div
      style={{
        backgroundColor: footerBackground,
        width: "100vw",
        height: "12vh",
        position: "fixed",
        bottom: "0",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="footer-left">
        <img className="footer-album-logo" src={thumbnail} alt="" />
        <div className="footer-song-info">
          <h4>{songName}</h4>
          <p>{artist}</p>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-center-element">
        <p>{audioEl.current.currentTime}</p>
          <ShuffleIcon className="footer-green" />
          <SkipPreviousIcon onClick={skipPrevious} className="footer-icon" />

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
          <audio src={src} onTimeUpdate={handleProgress} ref={audioEl} />
          <SkipNextIcon onClick={nextSong} className="footer-icon" />
          <RepeatIcon className="footer-green" />
        </div>
        
        <Slider
          aria-label="Volume"
          value={progress}
          onChange={handleSeeker}
          className="footer-music-slider"
        />
      </div>
      <div className="footer-right">
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          justifyContent={"flexEnd"}
          className="gird"
        >
          <Grid item>
            <PlaylistPlayIcon className="footer-icon" />
          </Grid>
          <Grid item>
            <VolumeDown className="footer-icon" />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={handleVolume}
              aria-labelledby="continuous-slider"
              className="footer-slider"
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    </div>
  );
}
