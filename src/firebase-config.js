import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMxGtNx8Aa7P7Pq72B0MbfDakV1g5J1nE",
    authDomain: "rmad--01.firebaseapp.com",
    projectId: "rmad--01",
    storageBucket: "rmad--01.appspot.com",
    messagingSenderId: "44150495231",
    appId: "1:44150495231:web:8c0748d958f5e2e4f239ca",
    measurementId: "G-42XS8DJ423"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);