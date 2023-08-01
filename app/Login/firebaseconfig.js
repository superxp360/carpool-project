
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBguzVdciRCcX2maFhbHRCUBLF-jmGLrJE",
  authDomain: "carpool-project-kf-web.firebaseapp.com",
  projectId: "carpool-project-kf-web",
  storageBucket: "carpool-project-kf-web.appspot.com",
  messagingSenderId: "883200379647",
  appId: "1:883200379647:web:91e109b82221c48a839aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);