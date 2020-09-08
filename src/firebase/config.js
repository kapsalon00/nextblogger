import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD45pRoyPjZTun53kIPtNwwmoRsr6gIB-w",
  authDomain: "nextbloggerino.firebaseapp.com",
  databaseURL: "https://nextbloggerino.firebaseio.com",
  projectId: "nextbloggerino",
  storageBucket: "nextbloggerino.appspot.com",
  messagingSenderId: "318850607825",
  appId: "1:318850607825:web:841a03508f8071799033f0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const projectFirestore = firebase.firestore();
export { projectFirestore, timestamp };
