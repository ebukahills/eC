import React, { Component } from 'react';

import {
  Tabs,
  Tab,
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  Modal,
  Panel,
  Nav,
  NavItem
} from 'react-bootstrap';

class HomePriceTicker extends Component {
  //TODO: Add form reactive functions. Important!

  render() {

    return (
      <div className='isCenter' >
        <Panel>
          <h4>Rate Checker</h4>
          <p>Check Our Live Exchange Rates</p>
          <Tab.Container id="HomePriceTicker" defaultActiveKey="first">
            <Row className='clearfix' >
              <Col sm={2} md={3}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    BUY
                  </NavItem>
                  <NavItem eventKey="second">
                    SELL
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={10} md={9} >
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                    <Form inline>
                      <FormGroup bsSize='large' >
                        <InputGroup>
                          <InputGroup.Addon>BTC</InputGroup.Addon>
                          <FormControl type='number' min="0.00001" max="10" step="0.001"/>
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon>NGN</InputGroup.Addon>
                          <FormControl type='number' step='1000' />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon>${'   '}</InputGroup.Addon>
                          <FormControl type='number' step='0.10' />
                        </InputGroup>
                      </FormGroup>
                      <Button type="submit">
                        BUY
                        </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col sm={10} md={9} >
                <Tab.Content animation>
                  <Tab.Pane eventKey="second">
                    <Form inline>
                      <FormGroup bsSize='large' >
                        <InputGroup>
                          <InputGroup.Addon>BTC</InputGroup.Addon>
                          <FormControl type='number' min="0.00001" max="10" step="0.001" />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon>NGN</InputGroup.Addon>
                          <FormControl type='number' step='1000' />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon>${'   '}</InputGroup.Addon>
                          <FormControl type='number' step='0.10' />
                        </InputGroup>
                      </FormGroup>
                      <Button type="submit">
                        SELL
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Panel>
      </div>
    );
  }
}

export default HomePriceTicker;