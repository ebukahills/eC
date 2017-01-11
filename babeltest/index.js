"use strict";

var firebase = require('firebase');
// initialize firebase
var config = {
  apiKey: "AIzaSyBjUmhvq4VvE9HKa35jqTjVCMWGuT6vDF0",
  authDomain: "ecplayground-265b2.firebaseapp.com",
  databaseURL: "https://ecplayground-265b2.firebaseio.com",
  storageBucket: "ecplayground-265b2.appspot.com",
  messagingSenderId: "724482291609"
};
firebase.initializeApp(config);

var databaseRef = firebase.database().ref();
databaseRef.set({
  appName: 'eCTest',
  isRunning: true,
  user: {
    name: 'Ebuka',
    age: 23
  }
});

databaseRef.child('user').set({
  name: 'Ebuka',
  age: 23
}).then(function () {
  console.log('Successfully Set Database Data');
}, function (e) {
  console.log('Sorry, there was an error', e);
});

databaseRef.update({
  isRunning: false
}).then(function () {
  console.log('Sucessfully updated database data');
}, function (e) {
  console.log('Problem updating data', e);
});
//# sourceMappingURL=index.js.map