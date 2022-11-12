import React, { useRef, useState,useEffect } from 'react'
import { redirect } from 'react-router-dom';
import './video.css'
const Video = () => {
    const video = useRef();
    const [coutdown, setcoutdown] = useState(15);

    const timer = () => 
      {
        setInterval(()=>{setcoutdown(coutdown - 1)}, 1000);
        if(coutdown === 0){window.location.href = "http://localhost:3000/music"};
      }
        timer();
    

    useEffect(() => {
        const startVideo = () => {
            navigator.getUserMedia(
                { video: {} },
                stream => video.current.srcObject = stream,
                err => console.error(err)
            )
        }
        startVideo();

    }, []);
  return (
    <div>
        <>
        <div className="video_container">
            <div className="coutdown_text">Wait for {coutdown}sec</div>
            <div className="video">
                <video id='video' width={400} height={400} src="" controls ref={video} autoPlay loop></video>
            </div>
        </div>
        </>
    </div>
  )
}

export default Video