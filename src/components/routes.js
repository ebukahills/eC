import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Main from './Main';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import MainDashboard from './MainDashboard';
import AppContainer from './AppContainer';
import MainContainer from './MainContainer'
import AccountDetails from './AccountDetails';
import ReferralsPage from './ReferralsPage';
import TransactionsPage from './TransactionsPage';

const routes = (
  <Route path='/' component={AppContainer} >
    <Route component={Main} >  
      <IndexRoute component={Homepage} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
    </Route>
    <Route path='/main' component={MainContainer} >
      <IndexRoute component={MainDashboard} />
      <Route path='account' component={AccountDetails} />
      <Route path='referrals' component={ReferralsPage} />
      <Route path='transactions' component={TransactionsPage} />
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)

export default routes;