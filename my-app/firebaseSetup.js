import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhJL7DgQLLVmYfG97_jyFTIDGf32Db5Q0",
  authDomain: "chart-dashboard-1249e.firebaseapp.com",
  projectId: "chart-dashboard-1249e",
  storageBucket: "chart-dashboard-1249e.appspot.com",
  messagingSenderId: "15470486482",
  appId: "1:15470486482:web:57ad8bd05c13702dc55e0b",
  measurementId: "G-R5DRSKWVBH"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const firestore = app.firestore(); 
export {auth, firestore};