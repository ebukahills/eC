import React, { Component } from 'react';
import * as actions from '../firebase/actions';

import {
  Panel,
  Button,
  Well,
  Row,
  ButtonGroup,
  Col
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

class Login extends Component {
  handleGoogleLogin () {
    actions.startGoogleLogin();
  }
  handleFacebookLogin () {
    actions.startFacebookLogin();
  }
  render() {
    return (
      <div className='isCenter'>
        <Panel>
          <Row>
            <h4>LOGIN</h4>
            <br />
            <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2} >
              <Button onClick={this.handleFacebookLogin} bsSize='large' className='btn-social btn-facebook' block><FontAwesome name='facebook' /> Login with Facebook </Button>
              <br/>
              <Button onClick={this.handleGoogleLogin} bsSize='large' className='btn-social btn-google' block><FontAwesome name='google' /> Login with Google </Button>
              <hr />
              <h4>OR...</h4>
              <hr />
              <br/>
              <LinkContainer to='/signup' ><Button><FontAwesome name='user-plus' size='2x' /> SIGNUP WITH SOCIAL ACCOUNT</Button></LinkContainer>
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


export default Login;