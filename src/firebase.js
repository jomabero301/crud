import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgAegYwdpocK7gqFE9YDNFaO9OhnWhXcA",
    authDomain: "crud-f31cc.firebaseapp.com",
    projectId: "crud-f31cc",
    storageBucket: "crud-f31cc.appspot.com",
    messagingSenderId: "193008630627",
    appId: "1:193008630627:web:3e65b356e4344ca3e67156"
  }

  export const firebaseApp=firebase.initializeApp(firebaseConfig)