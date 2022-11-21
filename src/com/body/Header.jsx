import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'
export default function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
        <SearchIcon/>
        <input type="text" placeholder='Search for Artist, Songs and playlist ' />
        </div>
        <div className="header-right">
        {/* <Avatar alt={user?.display_name} src={user?.images[0].url} /> */}
        {/* <h4>{user?.display_name}</h4> */}
        </div>
    </div>
  )
}
