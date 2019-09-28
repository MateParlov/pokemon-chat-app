// Your web app's Firebase configuration
import firebase from 'firebase';
import FIREBASE_CONFIG from './FB_CONFIG';

//get your key and config from firebase site
var firebaseConfig = FIREBASE_CONFIG;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
