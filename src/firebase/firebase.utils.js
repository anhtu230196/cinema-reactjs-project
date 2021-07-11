import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAKxzNi9i6cl2Jx3ctjpiqjypvJpuCTIJs",
  authDomain: "chap-app-a204b.firebaseapp.com",
  projectId: "chap-app-a204b",
  storageBucket: "chap-app-a204b.appspot.com",
  messagingSenderId: "7464444676",
  appId: "1:7464444676:web:28054b01337589c6e36651",
};

firebase.initializeApp(config);

export default firebase;
