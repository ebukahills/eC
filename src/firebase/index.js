import firebase from 'firebase';

try {
  var config = {
    apiKey: 'AIzaSyBjUmhvq4VvE9HKa35jqTjVCMWGuT6vDF0',
    authDomain: 'ecplayground-265b2.firebaseapp.com',
    databaseURL: 'https://ecplayground-265b2.firebaseio.com',
    storageBucket: 'ecplayground-265b2.appspot.com',
    messagingSenderId: '724482291609'
  };
  firebase.initializeApp(config);
  console.log('Initialized Database');

} catch (e) {
  console.log('Cannot connect to Database: Please check error message', e)
}

export var db = firebase.database().ref();
export var transactionsRef = db.child('transactions')
export var usersRef = db.child('users');
export var storeRef = firebase.storage().ref();

export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();


export default firebase;
