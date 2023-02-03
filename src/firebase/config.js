import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGig1-cZgTUq_vp3NnL_4di9FVISHiRsA",
  authDomain: "we-connect-97f64.firebaseapp.com",
  projectId: "we-connect-97f64",
  storageBucket: "we-connect-97f64.appspot.com",
  messagingSenderId: "853078620371",
  appId: "1:853078620371:web:7e437c1de60a2319227c26",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
