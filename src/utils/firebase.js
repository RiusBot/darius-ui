import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCE9NOZtXCQGFN1UQt7WT5iouioPdkt2bU",
  authDomain: "darius-test-7ff29.firebaseapp.com",
  projectId: "darius-test-7ff29",
  storageBucket: "darius-test-7ff29.appspot.com",
  messagingSenderId: "807144843929",
  appId: "1:807144843929:web:c6e019052ffa49efdde608"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;