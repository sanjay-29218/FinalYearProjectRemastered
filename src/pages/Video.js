import React, { useRef, useState,useEffect } from 'react'
import { redirect } from 'react-router-dom';
import './video.css'
const Video = () => {
    const video = useRef();
    const [coutdown, setcoutdown] = useState(5);

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
    

    // useEffect(() => {
    //     console.log('hello')
    //     const startVideo = () => {
    //         navigator.getUserMedia(
    //             { video: {} },
    //             stream => video.current.srcObject = stream,
    //             err => console.error(err)
    //         )
    //     }
    //     startVideo();

    // }, []);
  return (
    <div>
        <>
        <div className="video_container">
            <div className="coutdown_text">Wait for {coutdown}sec</div>
            <div className="video">
                {/* <video id='video' width={400} height={400} src="" controls ref={video} autoPlay loop></video> */}
                <img src="http://127.0.0.1:5000/video" style={{width:"50vw",height:'50vh'}}></img>
            </div>
        </div>
        </>
    </div>
  )
}

export default Video