
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsXl_v_QyeyzlML4-wp55ecof3L1espF4",
  authDomain: "andreafp-b2d55.firebaseapp.com",
  projectId: "andreafp-b2d55",
  storageBucket: "andreafp-b2d55.appspot.com",
  messagingSenderId: "1060838457210",
  appId: "1:1060838457210:web:eae41718146f6533aca0c3",
  measurementId: "G-RL6BGFWZXG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);