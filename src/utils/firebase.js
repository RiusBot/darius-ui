import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/app-check';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  console.log("Firebase Initialized");
} catch (err) {
  console.log("Error Initializing Firebase", err);
}

export const initializeFirebaseAppCheck = () => {
  try {
    const appCheck = firebase.appCheck();
    appCheck.activate(
      new firebase.appCheck.ReCaptchaEnterpriseProvider(
        process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY
      ),
      true // Set to true to allow auto-refresh.
    );
   } catch (err) {
     console.log("Error Initializing appCheck", err);
  }
}

export const analytics = () => {
  if (typeof window !== "undefined") {
    return firebase.analytics()
  } else {
    return null
  }
}

export default firebase;
