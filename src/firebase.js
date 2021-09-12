import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA7Z9dKcMLu1f8ppgvuP0k0snu-eVuU-i8',
  authDomain: 'linkedin-clone-yp.firebaseapp.com',
  projectId: 'linkedin-clone-yp',
  storageBucket: 'linkedin-clone-yp.appspot.com',
  messagingSenderId: '10653880278',
  appId: '1:10653880278:web:b70b8d35e8aa6d872f5e77',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
