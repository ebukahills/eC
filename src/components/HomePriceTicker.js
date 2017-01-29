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

import { LinkContainer } from 'react-router-bootstrap';

import numeral from 'numeral';

class HomePriceTicker extends Component {

  constructor(props) {
    super(props);
    var liveRate = JSON.parse(localStorage.getItem('eCRates'));
    this.state = {
      rates: liveRate,
      buyBtcVal: 1.0,
      buyNgnVal: numeral((liveRate.dol * liveRate.buy)).format('0,0.[00]'),
      buyDolVal: numeral(liveRate.dol).format('0,0.[00]'),
      sellBtcVal: 1.0,
      sellNgnVal: numeral((liveRate.dol * liveRate.sell)).format('0,0.[00]'),
      sellDolVal: numeral(liveRate.dol).format('0,0.[00]')
    }

    this.btcUpd = this.btcUpd.bind(this)
    this.ngnUpd = this.ngnUpd.bind(this)
    this.dolUpd = this.dolUpd.bind(this)

    this.sellBtcUpd = this.sellBtcUpd.bind(this)
    this.sellNgnUpd = this.sellNgnUpd.bind(this)
    this.sellDolUpd = this.sellDolUpd.bind(this)
  }

  // Buy Price Ticker functions
  btcUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ buyButton: false })
    } else {
      this.setState({ buyButton: true })
    }
    this.setState({
      buyBtcVal: e.target.value,
      buyNgnVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.dol) * parseFloat(this.state.rates.buy)).format('0,0.[00]'),
      buyDolVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.dol)).format('0,0.[00]')
    })
  }
  ngnUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ buyButton: false })
    } else {
      this.setState({ buyButton: true })
    }
    this.setState({
      buyNgnVal: e.target.value,//no parsing here to allow .0 characters
      buyBtcVal: numeral(parseFloat(e.target.value) / (parseFloat(this.state.rates.buy) * (parseFloat(this.state.rates.dol)))).format('0.0[0000000]'),
      buyDolVal: numeral(parseFloat(e.target.value) / parseFloat(this.state.rates.buy)).format('0,0.[00]')
    })
  }
  dolUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ buyButton: false })
    } else {
      this.setState({ buyButton: true })
    }
    this.setState({
      buyDolVal: e.target.value,
      buyBtcVal: numeral(parseFloat(e.target.value) / parseFloat(this.state.rates.dol)).format('0.0[0000000]'),
      buyNgnVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.buy)).format('0,0.[00]')
    })
  }

  // Sell Price Ticker functions
  sellBtcUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ sellButton: false })
    } else {
      this.setState({ sellButton: true })
    }
    this.setState({
      sellBtcVal: e.target.value,
      sellNgnVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.dol) * parseFloat(this.state.rates.sell)).format('0,0.[00]'),
      sellDolVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.dol)).format('0,0.[00]')
    })
  }
  sellNgnUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ sellButton: false })
    } else {
      this.setState({ sellButton: true })
    }
    this.setState({
      sellNgnVal: e.target.value,//no parsing here to allow .0 characters
      sellBtcVal: numeral(parseFloat(e.target.value) / (parseFloat(this.state.rates.sell) * (parseFloat(this.state.rates.dol)))).format('0.0[0000000]'),
      sellDolVal: numeral(parseFloat(e.target.value) / parseFloat(this.state.rates.sell)).format('0,0.[00]')
    })
  }
  sellDolUpd(e) {
    if (!e.target.value || parseFloat(e.target.value) <= 0) {
      this.setState({ sellButton: false })
    } else {
      this.setState({ sellButton: true })
    }
    this.setState({
      sellDolVal: e.target.value,
      sellBtcVal: numeral(parseFloat(e.target.value) / parseFloat(this.state.rates.dol)).format('0.0[0000000]'),
      sellNgnVal: numeral(parseFloat(e.target.value) * parseFloat(this.state.rates.sell)).format('0,0.[00]')
    })
  }

  render() {

    return (
      <div className='isCenter' >
        <Panel>
          <h4>Rate Checker</h4>
          <p>Check Our Live Exchange Rates</p>
          <Tab.Container id="HomePriceTicker" defaultActiveKey="1">
            <Row className='clearfix' >
              <Col sm={2} md={3}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="1">
                    BUY
                  </NavItem>
                  <NavItem eventKey="2">
                    SELL
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={10} md={9} >
                <Tab.Content animation>
                  <Tab.Pane eventKey="1">
                    <Form inline>
                      <FormGroup bsSize='large' >
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#579;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.buyBtcVal} onChange={this.btcUpd} />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#8358;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.buyNgnVal} onChange={this.ngnUpd} />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#36;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.buyDolVal} onChange={this.dolUpd} />
                        </InputGroup>
                      </FormGroup>
                      <hr />
                      <LinkContainer to='/signup' >
                        <Button bsStyle='primary' bsSize='large' >BUY</Button>
                      </LinkContainer>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col sm={10} md={9} >
                <Tab.Content animation>
                  <Tab.Pane eventKey="2">
                    <Form inline>
                      <FormGroup bsSize='large' >
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#579;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.sellBtcVal} onChange={this.sellBtcUpd} />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#8358;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.sellNgnVal} onChange={this.sellNgnUpd} />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Addon><b className='moneyIcon'>&#36;</b></InputGroup.Addon>
                          <FormControl type='text' value={this.state.sellDolVal} onChange={this.sellDolUpd} />
                        </InputGroup>
                      </FormGroup>
                      <hr />
                      <LinkContainer to='/signup' >
                        <Button bsStyle='info' bsSize='large' >SELL</Button>
                      </LinkContainer>
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
