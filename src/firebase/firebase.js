import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC5eRqINjLw0KROEKcIBVwwn7iM2u2aSMI",
  authDomain: "miniblog-aede5.firebaseapp.com",
  projectId: "miniblog-aede5",
  storageBucket: "miniblog-aede5.appspot.com",
  messagingSenderId: "605827582408",
  appId: "1:605827582408:web:9eca8ddcb773d73d5d98fd"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};