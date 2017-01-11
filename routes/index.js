var express = require('express');
var router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, Router, browserHistory, RouterContext } from 'react-router';

import routes from '../src/components/routes';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('*', (req, res) => {
  match({routes: routes, location: req.url}, (err,redirect, props) => {
    const reactMarkup = renderToString(<RouterContext {...props} />)
  })
});

module.exports = router;
