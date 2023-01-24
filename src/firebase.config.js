import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKndhfBH25HmEBkfTe2X_-MbTCVrELAKg",
  authDomain: "affar-1f223.firebaseapp.com",
  databaseURL: "https://affar-1f223-default-rtdb.firebaseio.com",
  projectId: "affar-1f223",
  storageBucket: "affar-1f223.appspot.com",
  messagingSenderId: "540132201747",
  appId: "1:540132201747:web:7d63b8cdc7dee4d170b6e6"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
