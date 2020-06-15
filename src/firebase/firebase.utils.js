import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPRLsQdYtF_FQJHmHIThImQQgYy4ciJ-s",
    authDomain: "crwn-db-3bf2d.firebaseapp.com",
    databaseURL: "https://crwn-db-3bf2d.firebaseio.com",
    projectId: "crwn-db-3bf2d",
    storageBucket: "crwn-db-3bf2d.appspot.com",
    messagingSenderId: "465394126340",
    appId: "1:465394126340:web:51ecba266d5512438faf51",
    measurementId: "G-7CXMFZ5GHE"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;