import React, { useEffect } from 'react'
import {app} from '../firebase/firebase'
import { getStorage, ref, listAll } from "firebase/storage";
const Musicfirebase = () => {
    

// const firebaseApp = app();
const storage = getStorage();

const listRef = ref(storage, 'music/happy');

// Find all the prefixes and items.
useEffect(()=>{
    listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
     console.log(folderRef)
    });
    res.items.forEach((itemRef) => {
        // console.log(itemRef)
        itemRef.getDownloadURL().then((url)=>{
            console.log(url)
        })
    });
  }).catch((error) => {
    console.log(error)
  });
})
  return (
    
    <div>Musicfirebase</div>
  )
}

export default Musicfirebase