import React, { Component } from 'react';

import {
  Button,
  ButtonToolbar,
  Jumbotron
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {LinkContainer} from 'react-router-bootstrap';

import HomePriceTicker from './HomePriceTicker';
import Features from './Features';
import LBCAdvert from './LBCAdvert';

class Homepage extends Component {
  render () {
    
    return (
      <div>
        <div>
          <Jumbotron className='jumboHome' >
            <h2>Welcome to eChange</h2>
            <p><span className='greenC'>Nigeria</span>'s Easiest and Most Reliable Bitcoin and Digital Asset Exchange</p>
            <p>Buy and Sell Bitcoin at the best Prices on the Market</p>
            
            <LinkContainer to='/signup' ><Button bsStyle='primary' bsSize='large'><FontAwesome name="users"/>  SIGN UP</Button></LinkContainer>
          
          </Jumbotron>
        </div>
        <div>
          <HomePriceTicker />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <LBCAdvert />
        </div>
      </div>
    );
  }
}

export default Homepage;