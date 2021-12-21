import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_wXo-KcoyAKPcrUdZDx11Y3KRDAmLIxo",
  authDomain: "fir-a8696.firebaseapp.com",
  projectId: "fir-a8696",
  storageBucket: "fir-a8696.appspot.com",
  messagingSenderId: "1075667150811",
  appId: "1:1075667150811:web:2e1e5f5a2fd31fd95169fe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export{
    app,
    db
}



