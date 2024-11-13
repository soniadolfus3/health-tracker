import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDh8wM67GOr8KSVTr6T9_iBgr79xq7Bmw",
  authDomain: "health-tracker-959f1.firebaseapp.com",
  projectId: "health-tracker-959f1",
  storageBucket: "health-tracker-959f1.firebasestorage.app",
  messagingSenderId: "530154656120",
  appId: "1:530154656120:web:4c52924511c7c2a304788d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export the necessary services and functions
export { auth, db, collection, addDoc };
