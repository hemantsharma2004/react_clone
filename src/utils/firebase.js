
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpCrOimTLuT0-8BxQAhHUSEE78ZYyxB74",
  authDomain: "netflixgpt-3e2d6.firebaseapp.com",
  databaseURL: "https://netflixgpt-3e2d6-default-rtdb.firebaseio.com",
  projectId: "netflixgpt-3e2d6",
  storageBucket: "netflixgpt-3e2d6.appspot.com",
  messagingSenderId: "106765801175",
  appId: "1:106765801175:web:58b8be48271b2421784292",
  measurementId: "G-PJKEEWFP0J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();