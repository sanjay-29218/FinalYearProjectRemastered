import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='navbar'>
        <div><Link to={'/'} className='a'> Home </Link> </div>
        <div > <Link to={"/video"} className='a'>Video</Link></div>
        <div ><Link to={"/music"} className='a'>Music</Link></div>
        <div className='a'><Link to={"/browse"} className='a'>Browse</Link></div>
        <div className='a'><Link to={"/musicupload"} className='a'>Upload</Link></div>
    </div>
  )
}

export default Nav