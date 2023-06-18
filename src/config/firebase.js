
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBBURmB72ZXTASmCffUPIy7GcajFXqHOms",
  authDomain: "tiktok-ebac-23edb.firebaseapp.com",
  projectId: "tiktok-ebac-23edb",
  storageBucket: "tiktok-ebac-23edb.appspot.com",
  messagingSenderId: "473830413743",
  appId: "1:473830413743:web:9790d838247d5f42bf8b5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;