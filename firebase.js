// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjN5yPvuZTzxT27tOFf8g_fqIv8l-DBnE",
  authDomain: "cosmitics-23e9e.firebaseapp.com",
  projectId: "cosmitics-23e9e",
  storageBucket: "cosmitics-23e9e.appspot.com",
  messagingSenderId: "667919115202",
  appId: "1:667919115202:web:8c79a3f550c93ebf22ec5b"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const db=getFirestore(firebase_app)
