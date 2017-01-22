var express = require('express');
var router = express.Router();

import firebase, {usersRef} from '../firebase/index';

router.get('/:referredBy', (req, res) => {
  // Pull Referrer User ID from Route Parameters
  var referredBy = req.params.referredBy;
  // Set LocalStorage variable with referral User ID for future Access
  localStorage.setItem('eCRef', referredBy);
  res.redirect('../');
})

module.exports = router;