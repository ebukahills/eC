import React, { Component } from 'react';

import {
  Panel,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome'

class Signup extends Component {
  render() {
    return (
      <div className='isCenter'>
        <Panel>
          <Row>
            <h4>SIGNUP</h4>
            <br />
            <Col md={4} mdOffset={4} sm={6} smOffset={3}  >
              <Button bsSize='large' className='btn-social btn-facebook' block><FontAwesome name='facebook' /> Signup with Facebook </Button>
              <Button bsSize='large' className='btn-social btn-google' block><FontAwesome name='google' /> Signup with Google </Button>
              <hr />
              <h4>OR...</h4>

              <hr />
              <p>Login with a Social Account</p>
              <Button bsSize='large' className='btn-social btn-facebook' block><FontAwesome name='facebook' /> Login with Facebook </Button>
              <Button bsSize='large' className='btn-social btn-google' block><FontAwesome name='google' /> Login with Google </Button>
            </Col>
          </Row>
          <br/>
          <FontAwesome name='bitcoin' size='3x' />
        </Panel>
      </div>
    );
  }
}


export default Signup;