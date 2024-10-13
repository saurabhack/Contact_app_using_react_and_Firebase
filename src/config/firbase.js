// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87nOAunPk8BUIvSYnuesp7BiuvzSa7Hs",
  authDomain: "contactproject-3eb2c.firebaseapp.com",
  projectId: "contactproject-3eb2c",
  storageBucket: "contactproject-3eb2c.appspot.com",
  messagingSenderId: "535820065812",
  appId: "1:535820065812:web:0c6f3547ecfa31f8bd1b01",
  measurementId: "G-FD33XF46XF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Firestore
export const analytics = getAnalytics(app); // Initialize Analytics (optional)
