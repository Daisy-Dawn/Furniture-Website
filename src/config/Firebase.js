import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDnbfg57XrPGmwdc13Kuux3z9O7GoefDBo",
  authDomain: "furnitura-ecommerce.firebaseapp.com",
  projectId: "furnitura-ecommerce",
  storageBucket: "furnitura-ecommerce.appspot.com",
  messagingSenderId: "986393782367",
  appId: "1:986393782367:web:88e7be325917e34ab113ea",
  measurementId: "G-P20208GL85"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
