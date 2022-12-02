import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAV2weruPXQJ-bMxwz66jccirtAPOlX2Ew",
  authDomain: "major-project-560c2.firebaseapp.com",
  projectId: "major-project-560c2",
  storageBucket: "major-project-560c2.appspot.com",
  messagingSenderId: "700360119704",
  appId: "1:700360119704:web:778d057867af2ea2ef87ed",
  storageBucket: 'gs://major-project-560c2.appspot.com'
};



// Initialize Fireb ase
export const  app = initializeApp(firebaseConfig);
// export {storage,listAll as default}