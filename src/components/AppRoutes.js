import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}