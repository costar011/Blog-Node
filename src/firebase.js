import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCEmGc89N_c9nipfWyz972gUmfCDyKdtMI",
  authDomain: "dev-yr-blog.firebaseapp.com",
  databaseURL: "https://dev-yr-blog.firebaseio.com",
  projectId: "dev-yr-blog",
  storageBucket: "dev-yr-blog.appspot.com",
  messagingSenderId: "813416064343",
  appId: "1:813416064343:web:e0e464c4dfb6edda670a12",
  measurementId: "G-5DNDXYM5J6"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
