import React, { Component } from 'react';

import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import MainNavPanel from './MainNavPanel';
import MyFooter from './MyFooter';

class MainContainer extends Component {
  render () {
    return (
      <div className='isCenter' >
        <div>
          <Row>
            <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={12} xsHidden ><h4><Panel>eChange Logo</Panel></h4></Col>
          </Row>
        </div>
        <MainNavPanel />
        <div>
          <Col md={9} sm={9} xs={12} >
            <Panel>
              {this.props.children}            
            </Panel>
          </Col>
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default MainContainer;