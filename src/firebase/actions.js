import firebase, { db, usersRef, facebookProvider, googleProvider } from './index';

export var userID, userName, profilePic;


// Login user with Facebook Popup
export var startFacebookLogin = () => {
  firebase.auth().signInWithPopup(facebookProvider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User Logged In!', result);
  }, (error) => {
    console.log('Error!', error);
  });
}

// Login user with Google Popup
export var startGoogleLogin = () => {
  firebase.auth().signInWithPopup(googleProvider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User Logged In!', result);
  }, (error) => {
    console.log('Error!', error);
  });
}

// Logout Current User
export var logoutUser = () => {
  firebase.auth().signOut().then(() => {
    console.log('User Logged Out!')
  });
}



/*
**********************************
Main Database Read and Write Logic
**********************************
*/

// Save User Data to LocalStorage => Function
export var saveUserData = () => {
  var user = firebase.auth().currentUser;
  if (user !== null) {
    userID = user.uid;
    usersRef.child(userID).once('value').then((snapshot) => {
      var userData = snapshot.val();
      console.log(userData);
      localStorage.setItem('echange', JSON.stringify(userData));
  });
  } else {
    return
  }
  
}

// Delete User Data from LocalStorage => Function
export var deleteUserData = () => {
  localStorage.removeItem('echange');
}

// Handle Authentication State Changes

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User just logged in
    userID = user.uid;
    userName = user.displayName;
    profilePic = user.photoURL;

    // Check if user already exists

    usersRef.child(userID).once('value').then((snapshot) => {
      if(!snapshot.exists()) {
        // Run signup Logic for New Users 
        usersRef.child(userID).set({
          name: userName,
          userID: userID,
          profilePic: profilePic,
          verified: false,
          transactions: {},
          defaultBTC: {},
          bankDetails: {}
        });
      }
    });

    saveUserData();
    
    //Load user data for existing user
    
  } else {
    // User just signed out. Run signout logic here
    deleteUserData();
  }
});