import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "apple-up.firebaseapp.com",
  databaseURL: "https://apple-up.firebaseio.com",
  projectId: "apple-up",
  storageBucket: "apple-up.appspot.com",
  messagingSenderId: "1052389051981"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()