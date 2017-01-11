var express = require('express');
var router = express.Router();

var React = require('react');
var ReactRouter = require('react-router');
var ReactDOMServer = require('react-dom/server');
var RouterContext = ReactRouter.RouterContext;
var match = ReactRouter.match;
// import { match, Router, browserHistory, RouterContext } from 'react-router';

var routes = require('../src/components/routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/*', (req, res) => {
  match({routes: routes, location: req.url}, (err, redirect, props) => {
    var reactMarkup = ReactDOMServer.renderToString(<RouterContext {...props} />)
    res.render('index', { reactMarkup });
  });
});

router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
