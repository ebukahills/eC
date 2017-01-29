import React, { Component } from 'react';
import { logoutUser } from '../firebase/actions';

import {
  Panel,
  Button,
  ButtonGroup,
  Col,
  Image,
  Thumbnail,
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class MainNavPanel extends Component {

  startLogout() {
    logoutUser();
  }

  render() {

    return (
      <div>
        <div>
          <Col md={3} sm={3} xsHidden >
            <AutoAffix>
              <Panel>
                <ButtonGroup vertical block>
                  <IndexLinkContainer to='/main'><Button>Dashboard</Button></IndexLinkContainer>
                  <LinkContainer to='/main/account'><Button>Account</Button></LinkContainer>
                  <LinkContainer to='/main/transactions' ><Button>Transactions</Button></LinkContainer>
                  <LinkContainer to='/main/referrals' ><Button>Referrals</Button></LinkContainer>
                  <LinkContainer to='/main/support' ><Button>Support</Button></LinkContainer>
                </ButtonGroup>
                <br />
                Signed in as: <LinkContainer to='/main/account' ><Button bsStyle='link' >{this.props.echange.name}</Button></LinkContainer><br />
                <Button onClick={this.startLogout} bsStyle='danger' >LOGOUT</Button>
              </Panel>
            </AutoAffix>
          </Col>
        </div>
        {/*Small Screen Size Navbar */}
        <div>
          <Col mdHidden lgHidden smHidden xs={12} >
            <div>
              <Navbar default collapseOnSelect >
                <Navbar.Header>
                  <Navbar.Brand>eChange</Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                  <Navbar.Text>Signed In as: {this.props.echange.name}</Navbar.Text>
                  <Nav>
                    <IndexLinkContainer to='/main'><NavItem><Button bsStyle="link">Dashboard</Button></NavItem></IndexLinkContainer>
                    <LinkContainer to='/main/account'><NavItem><Button bsStyle="link">Account</Button></NavItem></LinkContainer>
                    <LinkContainer to='/main/transactions'><NavItem><Button bsStyle="link">Transactions</Button></NavItem></LinkContainer>
                    <LinkContainer to='/main/referrals'><NavItem><Button bsStyle="link">Referrals</Button></NavItem></LinkContainer>
                    <LinkContainer to='/main/support'><NavItem><Button bsStyle="link">Support</Button></NavItem></LinkContainer>
                    <NavItem><Button onClick={this.startLogout} bsStyle='danger' >LOGOUT</Button></NavItem>
                  </Nav>

                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </div>
      </div>
    )
  }
}

export default MainNavPanel;
