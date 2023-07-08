// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-EZvMDsB6UGpaDqsxcKytpWfyv0bptOc",
  authDomain: "dating-website-2acce.firebaseapp.com",
  projectId: "dating-website-2acce",
  storageBucket: "dating-website-2acce.appspot.com",
  messagingSenderId: "1040547085619",
  appId: "1:1040547085619:web:5c97d1638aa5927b80d246",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()