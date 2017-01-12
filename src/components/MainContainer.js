import React, { Component } from 'react';

import {
  Row,
  Col
} from 'react-bootstrap';

import MainNavPanel from './MainNavPanel';
import MyFooter from './MyFooter';

class MainContainer extends Component {
  render () {
    return (
      <div>
        <div>
          <Row>
            <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={12} ><h4>eChange Logo</h4></Col>
          </Row>
          <hr/>
        </div>
        <MainNavPanel />
        <div>
          <Col md={9} sm={9} xs={12} >
            {this.props.children}            
          </Col>
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default MainContainer;