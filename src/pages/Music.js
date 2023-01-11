import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios';
import Player from '../com/player/Player';
// import Player from '../com/player/Player';

function Music() {

    // Fethin data from the server
    const [label, setLabel] = useState('')
    async function fetchData() {
        const request = await axios.get('http://localhost:5000/musicapi');
        const data = await request.data;
        console.log(request.data);
        setLabel(data.playlist)

    }
    useEffect(() => {
        
        fetchData();

    }, [])




    // Playing and pausing the music
    if (label === '') {
        return <>Loading...</>
    }
    else {
        return   <>
        
             <Player label={label} fetchData={fetchData} />
             
             
        </>

    }
    
}
// }
export default Music