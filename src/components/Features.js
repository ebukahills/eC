import React, { Component } from 'react';

import {
  Panel,
  Col,
  Well,
  Button
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Features extends Component {
  render () {
    return (
      <div className='isCenter' >
        <Panel>
          <Col md={4} sm={12} >
            <Well bsSize='small' >
              <FontAwesome name='flash' size='3x' />
              <h4>Fast</h4>
              <p>Complete Buy and Sell Orders in Minutes, not Hours</p>
            </Well>            
          </Col>
          <Col md={4} sm={12} >
            <Well bsSize='small' >
              <FontAwesome name='handshake-o' size='3x'/>
              <h4>Reliable</h4>
              <p>Experienced Managers and Responsive Customer Support ensure your Transactions are hassle-free</p>
            </Well>
          </Col>
          <Col md={4} sm={12} >
            <Well bsSize='small'>
              <FontAwesome name='id-badge' size='3x'/>
              <h4>Easy</h4>
              <p>Spend less time Verifying and more time Transacting with our modern Social Authentication Strategies</p>  
            </Well>
          </Col>
        </Panel>
      </div>
    )
  }
}

export default Features;