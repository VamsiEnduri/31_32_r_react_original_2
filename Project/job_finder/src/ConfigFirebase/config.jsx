import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBBXufgrIn59_ClF1B-B5uierIuqyGFXK0",
  authDomain: "job-finder-31-32-r.firebaseapp.com",
  projectId: "job-finder-31-32-r",
  storageBucket: "job-finder-31-32-r.firebasestorage.app",
  messagingSenderId: "295498955149",
  appId: "1:295498955149:web:b3a95fb01d5e5a05d465c4",
  measurementId: "G-VSGC7JZF08"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app=initializeApp(firebaseConfig)
export const authentication=getAuth(app)
export const db=getFirestore(app)



// method :-- will take yr app cofig details
