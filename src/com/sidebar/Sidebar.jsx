import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <img className='sidebar-logo
        ' src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png" alt="..." />
        <Link to='/'><SidebarOption title='Home' Icon={HomeIcon}/></Link>
        <SidebarOption title='Search' Icon={SearchIcon}/>
        <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>
        <br/>
        <strong className='sidebar-title'>PLAYLISTS</strong>
        {/* {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name}/>
        ))} */}
        <hr/>
        

    </div>
  )
}

