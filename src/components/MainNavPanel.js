import React, {Component} from 'react'

import {
  Panel,
  Button,
  ButtonGroup,
  Col,
  Image,
  Thumbnail
} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class MainNavPanel extends Component {
  render () {
    return (
      <div>
        <Col md={3} sm={3} xsHidden >
          <Panel>
            <ButtonGroup vertical block>
              <IndexLinkContainer to='/main'><Button>Dashboard</Button></IndexLinkContainer>
              <LinkContainer to='/main/account'><Button>Account</Button></LinkContainer>
              <LinkContainer to='/main/transactions' ><Button>Transactions</Button></LinkContainer>
              <LinkContainer to='/main/referrals' ><Button>Referrals</Button></LinkContainer>
              <LinkContainer to='/main/support' ><Button>Support</Button></LinkContainer>                                      
            </ButtonGroup>
            <br/>
            <Thumbnail src='http://graph.facebook.com/1184298875/picture?type=large' >
              <p>User Name</p>
            </Thumbnail>
          </Panel>
        </Col>   
      </div>
    )
  }
}

export default MainNavPanel;