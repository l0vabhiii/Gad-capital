// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoOcgmwn6F9hdl0Es9hpTUXNerukbcyHs",
  authDomain: "gad-capital.firebaseapp.com",
  projectId: "gad-capital",
  storageBucket: "gad-capital.appspot.com",
  messagingSenderId: "978239151328",
  appId: "1:978239151328:web:2795c165105c4485d8c485",
  measurementId: "G-MTBV3ZSFPC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
