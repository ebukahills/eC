import firebase, { db, usersRef, facebookProvider, googleProvider } from './index';
// import axios from 'axios';

var userID, userName, profilePic, userEmail;


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
    console.log(user.uid);
    userID = user.uid;
    usersRef.child(userID).on('value', (snapshot) => {
      var userData = snapshot.val();
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

// Add New Bank Account Details to db => Function
export var addAccount = (bank, name, num) => {
  var accountDetails = {
    bankName: bank,
    accName: name,
    accNum: num
  }
  var userBankDetails = firebase.auth().currentUser.uid + '/bankDetails';
  console.log(userBankDetails)
  usersRef.child(userBankDetails).push(accountDetails).then((data) => {
    alert('Bank Details Successfully Set!')
  }, (error) => {
    alert('There was an error. Please Check your Network Connectivity')
  })
}

// Set Default BTC Address to db => Function
export var setBitcoin = (address) => {
  usersRef.child(firebase.auth().currentUser.uid).update({
    defaultBTC: address
  }).then((data) => {
    alert('Bitcoin Address Successfully Set!')
  }, (error) => {
    alert('There was an error. Please check your Network Connectivity')
  })
}

// Get Live Rates value and save to LocalStorage eCRates
export var getRates = () => {
  db.child('rates').on('value', (rate) => {
    localStorage.setItem('eCRates', JSON.stringify(rate.val()));
    console.log(rate.val())
  })

}




// Handle Authentication State Changes

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User just logged in
    userID = user.uid;
    userName = user.displayName;
    profilePic = user.photoURL;
    userEmail = user.email

    // Check if user already exists

    usersRef.child(userID).once('value').then((snapshot) => {
      if (!snapshot.exists()) {
        // If not, Run signup Logic for New Users 
        usersRef.child(userID).set({
          name: userName,
          userID: userID,
          profilePic: profilePic,
          email: userEmail,
          verified: false,
          transactions: {},
          defaultBTC: {},
          bankDetails: {},
          referrals: {},
          refCommission: {},
          referredBy: localStorage.getItem('eCRef') || {}
        });
      }
    });

    // Run Save User Data function to save user data to LocalStorage
    saveUserData();

  } else {
    // User just signed out. Run signout logic here
    deleteUserData();
  }
});