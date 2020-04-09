import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuuk3Y-gF4iHoUzxYdZnHKJUVU3iDl7C0",
  authDomain: "catch-of-the-day-cinthia.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cinthia.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
