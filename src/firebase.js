import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoXwYXuoooHHXmRE87Aq9hvPUAPbVGtYQ",
  authDomain: "twittercloneyt.firebaseapp.com",
  databaseURL: "https://twittercloneyt.firebaseio.com",
  projectId: "twittercloneyt",
  storageBucket: "twittercloneyt.appspot.com",
  messagingSenderId: "366673012545",
  appId: "1:366673012545:web:c74d31e61290f069cce3c0",
  measurementId: "G-W8HBBNMS8L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};