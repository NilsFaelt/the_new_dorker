import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTT-Qfns8DF4xsf5YGLxvDIg_35ucW43A",
    authDomain: "the-new-dorker.firebaseapp.com",
    projectId: "the-new-dorker",
    storageBucket: "the-new-dorker.appspot.com",
    messagingSenderId: "21869375753",
    appId: "1:21869375753:web:c89c6cc2ad2ef46d4d63d8",
    measurementId: "G-QE1ZB8BBBL"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)