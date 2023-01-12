import firebase from "firebase/app";
import "firebase/analytics";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBmq3VoapO-dKb1yvSyyodMPJLJOY4GKaI",
  authDomain: "wilson-pro-pharmacy.firebaseapp.com",
  projectId: "wilson-pro-pharmacy",
  storageBucket: "wilson-pro-pharmacy.appspot.com",
  messagingSenderId: "417191846439",
  appId: "1:417191846439:web:f6aa9ddf007e11a59f2402",
  measurementId: "G-X6QNJRVCYN",
};

const app = firebase.initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
