/**
 * author : Sudeera Madushan
 * date : 1/27/2024
 * project : food-delivery-system
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "food-deliver-system-805e1.firebaseapp.com",
    projectId: "food-deliver-system-805e1",
    storageBucket: "food-deliver-system-805e1.appspot.com",
    messagingSenderId: "841249339470",
    appId: "1:841249339470:web:bf2005487606f762562b1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
