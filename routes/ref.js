var express = require('express');
var router = express.Router();

router.get('/:referredBy', (req, res) => {
  // Pull Referrer User ID from Route Parameters
  var referredBy = req.params.referredBy;
  res.send('You were referred by', referredBy);
})

module.exports = router;