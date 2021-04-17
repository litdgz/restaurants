import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqsQRpSFq8SrU62DFoFQUI4H1LOua7i_k",
    authDomain: "restaurants-b1f9a.firebaseapp.com",
    projectId: "restaurants-b1f9a",
    storageBucket: "restaurants-b1f9a.appspot.com",
    messagingSenderId: "915063222648",
    appId: "1:915063222648:web:ff9b48088258627307588d"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)