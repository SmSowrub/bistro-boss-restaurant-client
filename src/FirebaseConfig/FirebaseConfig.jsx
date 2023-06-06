// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: "AIzaSyB2O7lluxTGbHHS4J3Ev82cUKsvI25WAos",
  // authDomain: "bistro-boss-restaurant-10e79.firebaseapp.com",
  // projectId: "bistro-boss-restaurant-10e79",
  // storageBucket: "bistro-boss-restaurant-10e79.appspot.com",
  // messagingSenderId: "689288674934",
  // appId: "1:689288674934:web:f27fd62ef0968c35d1a957"
  
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
