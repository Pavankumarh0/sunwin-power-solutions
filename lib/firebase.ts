import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Use environment variables if available, otherwise fall back to hardcoded values
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAjPYes7frd1YjWui81FLp3VVOuZXLrTns",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "sunvin-power-solutions.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sunvin-power-solutions",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "sunvin-power-solutions.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "707354654234",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:707354654234:web:ec904b82c7b3264557c3a3",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-P9C74113L5"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics lazily (only on client side) to avoid SSR issues
// This function should be called from client components only
export const getAnalyticsInstance = async () => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  
  try {
    const { getAnalytics, isSupported } = await import('firebase/analytics');
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  } catch (error) {
    console.warn('Firebase Analytics not available:', error);
  }
  
  return undefined;
};

export { app, db };

