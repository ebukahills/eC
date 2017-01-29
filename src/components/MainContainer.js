import React, { Component } from 'react';

import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import MainNavPanel from './MainNavPanel';
import MyFooter from './MyFooter';

import firebase from '../firebase/index';
import {
  saveUserData
} from '../firebase/actions';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { echange: null }
  }

  componentDidMount() {
    saveUserData(firebase.auth().currentUser.uid).then((userData) => {
      this.setState({ echange: JSON.parse(localStorage.getItem('echange')) })
      console.log('echange State Set');
    }, (err) => {
      console.log(err);
    });
  }

  render() {
    if (this.state.echange === null) {
      return (
        <div className="loadingPage isCenter">
          <i className="fa fa-cog fa-spin fa-5x fa-fw"></i>
          <h4>Loading Dashboard</h4>
          <h4>Please Wait...</h4>
        </div>
      )
    } else {
      return (
        <div className='isCenter' >
          <div>
            <Row className='clearfix'>
              <Col md={4} mdOffset={4} sm={6} smOffset={4} xsHidden ><h4><Panel>eChange Logo</Panel></h4></Col>
            </Row>
          </div>
          <MainNavPanel echange={this.state.echange} />
          <div>
            <Col md={9} sm={9} xs={12} >
              <Panel>
                {this.props.children}
              </Panel>
            </Col>
          </div>
          {/*<MyFooter />*/}
        </div>
      );
    }
  }
}

export default MainContainer;
