import React, {Component} from 'react'

import {
  Label
} from 'react-bootstrap';

import { Link } from 'react-router';

import MainPriceTicker from './MainPriceTicker';
import TransactionTable from './TransactionTable';

class MainDashboard extends Component {
  render () {
    return (
      <div>
        <br/>
        <h4>Welcome, User</h4><Link to='/main/account' ><Label bsStyle='warning' >UNVERIFIED</Label></Link>
        <br/>
        <MainPriceTicker />
        <br/>
        <TransactionTable />
      </div>
    )
  }
}

export default MainDashboard;