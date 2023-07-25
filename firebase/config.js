import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMipvZD0o5inRnvfuvp1-yYQcWORyWs6U",
  authDomain: "eventick-f31d0.firebaseapp.com",
  projectId: "eventick-f31d0",
  storageBucket: "eventick-f31d0.appspot.com",
  messagingSenderId: "980679592121",
  appId: "1:980679592121:web:c29a182f2f93a90c65f368",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
