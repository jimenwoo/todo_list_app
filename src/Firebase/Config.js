import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDVXUx3_M0GBfx8gxbiWZmdrH64kabUcp4",
  authDomain: "simple-todolist-app.firebaseapp.com",
  databaseURL: "https://simple-todolist-app.firebaseio.com",
  projectId: "simple-todolist-app",
  storageBucket: "simple-todolist-app.appspot.com",
  messagingSenderId: "700843586959",
  appId: "1:700843586959:web:2e54dcb4d7de4684"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
