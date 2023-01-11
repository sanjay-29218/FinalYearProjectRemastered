import React, { useRef, useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import Nav from "../com/Nav";
import "./video.css";
const Video = () => {
  const video = useRef();
  const [coutdown, setcoutdown] = useState(5);
  const coutEl = useRef();
  const [opacity, setopacity] = useState(1);

  useEffect(() => {
    const timer = () =>
    {
      setInterval(()=>{

        setcoutdown((prev)=>{
          if(prev===0){
            window.location.href = "http://localhost:3000/music"
          }
          else return prev-1
        })}, 1000);
    }
      timer();
  }, [])
  useEffect(() =>{
    if(opacity===1){
      setopacity(0);
    }
    else{
      setopacity(1);
    }

  },[coutdown])

  return (
    <div>
      <Nav />
      <div className="video-background"></div>
      <div className="video_container">
        <div
          className="coutdown_text"
          ref={coutEl}
          style={{
            opacity: opacity,
            textAlign: "center",
          }}
        >
          {" "}
          {coutdown}
        </div>
          <h3 style={{textAlign:'center',padding:'10px'}}>Please Stay Nearer to the Camera</h3>
        <div className="video">
          <img
            src="http://127.0.0.1:5000/video"
            style={{ width: "37vw", height: "50vh" }}
          ></img>
          
        </div>
      </div>
    </div>
  );
};

export default Video;
