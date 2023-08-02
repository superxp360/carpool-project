import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Define the configuration settings for the Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyBguzVdciRCcX2maFhbHRCUBLF-jmGLrJE",
  authDomain: "carpool-project-kf-web.firebaseapp.com",
  projectId: "carpool-project-kf-web",
  storageBucket: "carpool-project-kf-web.appspot.com",
  messagingSenderId: "883200379647",
  appId: "1:883200379647:web:91e109b82221c48a839aca"
  };

// Initialize Firebase with the configuration settings
const app = initializeApp(firebaseConfig);

// Export the auth object from the Firebase Authentication module
export const auth = getAuth(app);

// Export the db object from the Firebase Firestore module
export const db = getFirestore(app);