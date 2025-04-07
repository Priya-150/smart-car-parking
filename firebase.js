// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyD5Y4PKOx577tCtY_8muZPBc_D99UpZ0wQ",
  authDomain: "smart-car-management-fedfd.firebaseapp.com",
  projectId: "smart-car-management-fedfd",
  storageBucket: "smart-car-management-fedfd.firebasestorage.app",
  messagingSenderId: "563297891403",
  appId: "1:563297891403:web:493a9962951c4b02d049ce",
  measurementId: "G-BHHVQD10QS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth and database globally
window.auth = firebase.auth();
window.db = firebase.database();
