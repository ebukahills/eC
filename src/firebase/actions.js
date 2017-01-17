import firebase, { db, facebookProvider, googleProvider } from './index';


export var startFacebookLogin = () => {
  firebase.auth().signInWithPopup(facebookProvider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User Logged In!', result);
  }, (error) => {
    console.log('Error!', error);
  });
}

export var startGoogleLogin = () => {
  firebase.auth().signInWithPopup(googleProvider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User Logged In!', result);
  }, (error) => {
    console.log('Error!', error);
  });
}

export var logoutUser = () => {
  firebase.auth().signOut().then(() => {
    console.log('User Logged Out!')
  })
}