// script.js

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      alert('Google Login Failed: ' + error.message);
    });
}

function signupEmailPassword() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      alert('Sign Up Failed: ' + error.message);
    });
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = 'logout.html';
  });
}
