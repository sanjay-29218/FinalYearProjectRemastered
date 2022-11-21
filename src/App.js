import React,{useState,useEffect} from 'react'
import Homepage from '../src/pages/Homepage'
import Music from './pages/Music' 
import Video from './pages/Video'
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './com/Nav'
import EmotionDetection from './pages/EmotionDetection'
import Practice from './pages/Practice'
function App() {
  return (
    
     <div>
      <Router>
        <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route path="/music" element={<Music />} />
          <Route path='/video' element={<Video/>}/>
          <Route path='/emotion' element={<EmotionDetection/>}/>
          <Route path='/practice' element={<Practice/>}/>
        </Routes>
      </Router>
      
     </div>
    
  )
}

export default App