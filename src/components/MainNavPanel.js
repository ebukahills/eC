import React, { Component } from 'react'

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
                <Thumbnail src='http://graph.facebook.com/1184298875/picture?type=large' >
                  Signed in as: <LinkContainer to='/main/account' ><Button bsStyle='link' >User Name</Button></LinkContainer>
                </Thumbnail>
              </Panel>
            </AutoAffix>
          </Col>
        </div>
        {/*Small Screen Size Navbar */}
        <div>
          <Col mdHidden lgHidden smHidden xs={12} >
            <AutoAffix>
              <div>
                <Navbar default collapseOnSelect >
                  <Navbar.Toggle />

                  <Navbar.Collapse>
                      <Navbar.Text>User Name</Navbar.Text>                    
                    <Nav>
                      <IndexLinkContainer to='/main'><NavItem><Button bsStyle="link">Dashboard</Button></NavItem></IndexLinkContainer>
                      <LinkContainer to='/main/account'><NavItem><Button bsStyle="link">Account</Button></NavItem></LinkContainer>
                      <LinkContainer to='/main/transactions'><NavItem><Button bsStyle="link">Transactions</Button></NavItem></LinkContainer>
                      <LinkContainer to='/main/referrals'><NavItem><Button bsStyle="link">Referrals</Button></NavItem></LinkContainer>
                      <LinkContainer to='/main/support'><NavItem><Button bsStyle="link">Support</Button></NavItem></LinkContainer>
                    </Nav>

                  </Navbar.Collapse>
                </Navbar>
              </div>
            </AutoAffix>
          </Col>
        </div>
      </div>
    )
  }
}

export default MainNavPanel;