import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjPYes7frd1YjWui81FLp3VVOuZXLrTns",
  authDomain: "sunvin-power-solutions.firebaseapp.com",
  projectId: "sunvin-power-solutions",
  storageBucket: "sunvin-power-solutions.firebasestorage.app",
  messagingSenderId: "707354654234",
  appId: "1:707354654234:web:ec904b82c7b3264557c3a3",
  measurementId: "G-P9C74113L5"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (only on client side)
let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, db, analytics };

