import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxPXv6asqFkcLA4r34HyQr7ncJA3-QW0Q",
  authDomain: "linkedin-clone-91c2d.firebaseapp.com",
  projectId: "linkedin-clone-91c2d",
  storageBucket: "linkedin-clone-91c2d.appspot.com",
  messagingSenderId: "641573680838",
  appId: "1:641573680838:web:72612d581450e8da9a09c7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
