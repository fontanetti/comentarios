import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIt7Q91oYnzupWrDyQYVEZGkBdVeJci-s",
    authDomain: "reactjs-d5ef3.firebaseapp.com",
    databaseURL: "https://reactjs-d5ef3.firebaseio.com",
    projectId: "reactjs-d5ef3",
    storageBucket: "reactjs-d5ef3.appspot.com",
    messagingSenderId: "733620982664"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base