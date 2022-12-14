import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'

// Use this to initialize the firebase App
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
});

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);

export { auth, db };
