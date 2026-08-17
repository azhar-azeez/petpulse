import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_q_SWfFDoSN8oboWWw8KzohrPno6nX3o",
  authDomain: "petpulse-1e2b4.firebaseapp.com",
  projectId: "petpulse-1e2b4",
  storageBucket: "petpulse-1e2b4.firebasestorage.app",
  messagingSenderId: "796583053288",
  appId: "1:796583053288:web:e8b338e62dfa37fcc4c65d",
  measurementId: "G-Q0NB03T4N2"
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
