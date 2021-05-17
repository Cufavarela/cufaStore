import * as firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC4RELYn4UHWJDH05iHEQOYo0q-iAfVTLM",
  authDomain: "cufastore1.firebaseapp.com",
  projectId: "cufastore1",
  storageBucket: "cufastore1.appspot.com",
  messagingSenderId: "840101480011",
  appId: "1:840101480011:web:eea15685f26a7ec89aafce",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
