import React from 'react'
import './homepage.css'
import Nav from '../com/Nav'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Typewriter } from 'react-simple-typewriter'
import {FcMusic} from 'react-icons/fc'
function Homepage() {
  


  return (
    <div>
      <Nav />
      <div className="home-section">
      <span style={{ color: 'red', fontWeight: 'bold',fontSize:'3rem' }} className='text'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Music', 'Redefined']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        {/* <div className="home-music-img"><img src="/music.png" alt="" /></div> */}
        <div className='home-music-img'><FcMusic className=''  /></div> 
        <Link to='/video' ><DoubleArrowIcon className='arrow' fontSize='3rem' /></Link>
      </div>
    </div>
  )
}

export default Homepage