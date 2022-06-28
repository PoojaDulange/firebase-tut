import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABHCop9Xm9YUboJriuCYwJQcpqDKa7zdk",
    authDomain: "fir-tutorial-2e84a.firebaseapp.com",
    projectId: "fir-tutorial-2e84a",
    storageBucket: "fir-tutorial-2e84a.appspot.com",
    messagingSenderId: "433728943081",
    appId: "1:433728943081:web:c54bbe482b67733dfe9178",
    measurementId: "G-27S8G3GP2S"
  };
  
  const app=initializeApp(firebaseConfig);

export const db= getFirestore(app);