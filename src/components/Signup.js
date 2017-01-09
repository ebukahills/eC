import React, { Component } from 'react';

import {
  Panel,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import {LinkContainer} from 'react-router-bootstrap';

class Signup extends Component {
  render() {
    return (
      <div className='isCenter'>
        <Panel>
          <Row>
            <h4>SIGNUP</h4>
            <br />
            <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2} >
              <Button bsSize='large' className='btn-social btn-facebook' block><FontAwesome name='facebook' /> Signup with Facebook </Button>
              <br/>
              <Button bsSize='large' className='btn-social btn-google' block><FontAwesome name='google' /> Signup with Google </Button>
              <hr />
              <h4>OR...</h4>
              <hr />
              <br/>
              <LinkContainer to='/login' ><Button><FontAwesome name='sign-in' size='2x' /> LOGIN WITH SOCIAL ACCOUNT</Button></LinkContainer>
            </Col>
          </Row>
          <br/>
          <FontAwesome name='bitcoin' size='3x' />
          <br/>
        </Panel>
      </div>
    );
  }
}


export default Signup;