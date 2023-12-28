// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "cosmitics-ea4ae.firebaseapp.com",
  projectId: "cosmitics-ea4ae",
  storageBucket: "cosmitics-ea4ae.appspot.com",
  messagingSenderId: "322095325317",
  appId: "1:322095325317:web:88164f7d04261fde5709ec"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const db=getFirestore(firebase_app)
