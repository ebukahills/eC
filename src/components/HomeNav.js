import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import {
  Navbar,
  Nav,
  NavItem,
  Button
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class HomeNav extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>eChange</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav>
            <IndexLinkContainer to='/'><NavItem><Button bsStyle="link">HOME</Button></NavItem></IndexLinkContainer>
            <LinkContainer to='/about'><NavItem><Button bsStyle="link">ABOUT</Button></NavItem></LinkContainer>            
            <LinkContainer to='/rates'><NavItem><Button bsStyle="link">RATES</Button></NavItem></LinkContainer>
          </Nav>

          <Nav pullRight>
            <LinkContainer to='/login'><NavItem><Button bsStyle='default'> <FontAwesome name='sign-in'/> LOGIN</Button></NavItem></LinkContainer>
            <LinkContainer to='/signup'><NavItem><Button bsStyle='default'><FontAwesome name='user-plus'/> SIGNUP!</Button></NavItem></LinkContainer>            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HomeNav;