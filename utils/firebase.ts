// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"
import {FirebaseStorage, getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh5Y7yi6xAHEsq-mVDUDFevCdDDe_8euo",
  authDomain: "insfakegram-21328.firebaseapp.com",
  projectId: "insfakegram-21328",
  storageBucket: "insfakegram-21328.appspot.com",
  messagingSenderId: "1050186240482",
  appId: "1:1050186240482:web:01fa6b687ff463df2c69bb"
};

// Initialize Firebase
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db: Firestore = getFirestore()
const storage: FirebaseStorage = getStorage()

export { app, db, storage };