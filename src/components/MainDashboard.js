import React, {Component} from 'react'

import {
  Label
} from 'react-bootstrap';

import { Link } from 'react-router';

import MainPriceTicker from './MainPriceTicker';
import TransactionTable from './TransactionTable';

class MainDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { echange: JSON.parse(localStorage.getItem('echange'))}
  }

  render () {
    return (
      <div>
        <br/>
        <h4>Welcome, {this.state.echange.name.split(' ')[0]}</h4>
        {this.state.echange.verified ? (
        <Link to='/main/account' ><Label bsStyle='success' >VERIFIED</Label></Link>          
        ) : (
        <Link to='/main/account' ><Label bsStyle='danger' >UNVERIFIED</Label></Link>          
        )}
        <br/>
        <MainPriceTicker />
        <br/>
        <TransactionTable transactions={this.state.echange.transactions} />
      </div>
    )
  }
}

export default MainDashboard;