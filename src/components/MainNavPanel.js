import React, {Component} from 'react'

import {
  Panel,
  Button,
  ButtonGroup,
  Col
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class MainNavPanel extends Component {
  render () {
    return (
      <div>
        <Col md={3} sm={2} xsHidden >
          <ButtonGroup>
            <LinkContainer to='/accounts'><Button>Accounts</Button></LinkContainer>
            <LinkContainer to='/transactions' ><Button>Transactions</Button></LinkContainer>            
          </ButtonGroup>
        </Col>   
      </div>
    )
  }
}

export default MainNavPanel;