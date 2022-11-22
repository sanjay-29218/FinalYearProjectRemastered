import React, { useEffect, useRef } from 'react'
import './homepage.css'
import Nav from '../com/Nav'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function Homepage() {
  const textEl = useRef();
  useEffect(() => {

    const msg = "Redefined";
    const msgarr = msg.split("");
    textEl.current.innerHTML = "";
    for (let i = 0; i < msg.length; i++) {
      setTimeout(() => {
        textEl.current.innerText+= msgarr[i];
      },  i*200);
    }

  }, [])


  return (
    <div>
      <Nav />
      <div className="home-section">
        <div className='text' ref={textEl} > Redefined</div>
        <div className="image"></div>
        <div className="home-music-img"><img src="/music.png" alt="" /></div>
        <Link to='/video' ><DoubleArrowIcon className='arrow' fontSize='3rem' /></Link>
      </div>
    </div>
  )
}

export default Homepage