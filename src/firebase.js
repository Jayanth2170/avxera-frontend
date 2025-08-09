import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // <-- added GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhcB6O7uxspUYDUHoD9ricM7Nok0PUIgE",
  authDomain: "avexra-c0f76.firebaseapp.com",
  projectId: "avexra-c0f76",
  storageBucket: "avexra-c0f76.firebasestorage.app",
  messagingSenderId: "67841006639",
  appId: "1:67841006639:web:75f3628f683f0fe12b7ada",
  measurementId: "G-4MHJFGQ2G4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google provider
export const googleProvider = new GoogleAuthProvider();
