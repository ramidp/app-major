// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3A7f9_-5BNHdj7LeF9b9N3ngBZtzyZ-s",
  authDomain: "app-firebase-65653.firebaseapp.com",
  projectId: "app-firebase-65653",
  storageBucket: "app-firebase-65653.appspot.com",
  messagingSenderId: "257523896688",
  appId: "1:257523896688:web:68f19121dab41624c37fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;