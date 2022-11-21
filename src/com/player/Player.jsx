import './player.css'
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Body from '../body/Body'
import Footer from '../footer/Footer'


export default function Player({label,fetchData}) {
  return (
    <div className='player'>
        <div className="player-body">
            <Sidebar/>
            <Body label={label} />
        </div>
        <Footer label={label} fetchData={fetchData}  />
    </div>
  )
}
