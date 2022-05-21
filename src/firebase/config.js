// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwf9_Ca-QusJsValHJFokW0YKAadCA1AQ',
  authDomain: 'qoupe-310810.firebaseapp.com',
  databaseURL:
    'https://qoupe-310810-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'qoupe-310810',
  storageBucket: 'qoupe-310810.appspot.com',
  messagingSenderId: '1003017674578',
  appId: '1:1003017674578:web:7ee1262b4bed881dde248b',
  measurementId: 'G-DKHYGSYF30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app as firebase, analytics };
