import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import store from "../store";

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATA_BASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const usersCollection = db.collection("users");

auth.onAuthStateChanged((user) => {
  store.dispatch("addUser", {
    name: user.displayName,
    dateBirth: user.dateBirth,
    email: user.email,
  });
});

export { db, auth, usersCollection };
