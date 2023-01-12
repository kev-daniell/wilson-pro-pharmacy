import "firebase/analytics";
import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
