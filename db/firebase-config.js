import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUlzjw3vSb-yCNjp-vjKmvqQTljYIfToE",
  authDomain: "mundialdefigus.firebaseapp.com",
  projectId: "mundialdefigus",
  storageBucket: "mundialdefigus.appspot.com",
  messagingSenderId: "867228467338",
  appId: "1:867228467338:web:06e38b3f328a5978a42d73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;