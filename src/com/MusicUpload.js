import React, { useState } from 'react'
// import {useForm} from 'react-hook-form'

const MusicUpload = () => {
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadSong = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "tutorial")
    data.append("cloud_name","breellz")
    fetch("  https://api.cloudinary.com/v1_1/HappySongs/video/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    })
    .catch(err => console.log(err))
    }
    return (
    <div>
        {/* <form action="method" onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="musicname">MusicName</label>
            <input type="text" placeholder='Enter the name of the music' />
            <label htmlFor=""></label>
        </form> */}
    </div>
    )
}

export default MusicUpload