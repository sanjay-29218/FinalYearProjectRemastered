import './player.css'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Body from '../body/Body'
import Footer from '../footer/Footer'


export default function Player({label,fetchData}) {
  const [songPath , setSongPath] = useState(null)
  
  return (
    <div className='player'>
        <div className="player-body">
            <Sidebar/>
            <Body label={label} setSongPath={setSongPath} />
        </div>
        <Footer label={label} fetchData={fetchData} songPath={songPath}  />
    </div>

   
  )
}
