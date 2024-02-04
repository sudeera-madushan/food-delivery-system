/**
 * author : Sudeera Madushan
 * date : 1/27/2024
 * project : food-delivery-system
 */
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "food-deliver-system-805e1.firebaseapp.com",
    projectId: "food-deliver-system-805e1",
    storageBucket: "food-deliver-system-805e1.appspot.com",
    messagingSenderId: "841249339470",
    appId: "1:841249339470:web:bf2005487606f762562b1f"
};
export const app = initializeApp(firebaseConfig);
