// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5Y4PKOx577tCtY_8muZPBc_D99UpZ0wQ",
  authDomain: "smart-car-management-fedfd.firebaseapp.com",
  projectId: "smart-car-management-fedfd",
  storageBucket: "smart-car-management-fedfd.firebasestorage.app",
  messagingSenderId: "563297891403",
  appId: "1:563297891403:web:493a9962951c4b02d049ce",
  measurementId: "G-BHHVQD10QS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

window.googleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert(error.message);
  }
};

window.signupEmailPassword = async () => {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert(error.message);
  }
};

window.logout = async () => {
  await signOut(auth);
  window.location.href = 'logout.html';
};

window.firebaseRefs = { db };
