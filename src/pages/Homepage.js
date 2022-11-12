import React, { useEffect } from 'react'
import './homepage.css'
import Nav from '../com/Nav'
import {Link} from 'react-router-dom'
function Homepage() {
    // function getChar() {

    //   var i = 0;
    //   var char = "MusicRedefined";
    //   const interval = (function() {
    //     // let i =0;
    //     // const text = document.querySelector('.text');
    //     // console.log(text.innerText , i);
    //     // text.innerText = text.innerText+char[i];
    //     // i++;
    //       // if (i >= char.length) {
    //       //     clearInterval(interval);
    //       // }
    //     console.log(i++)
    //     if(i>5){
    //       clearInterval(interval);
    //     }
    //   }, 100);
  // }
  // getChar()
    
  return (
    <div>
        <Nav/>
        <div className="home-section">
            <div className="image"></div>
            <div className='text' >Music Redefined</div>
            <div className='btn' ><Link to='/video' className='a'>Get Started</Link></div>
        </div>
    </div>
  )
}

export default Homepage