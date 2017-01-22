import React, { Component } from 'react';

import {
  Alert,
  Button,
  Panel,
  Form,
  FormGroup,
  FormControl,
  Label,
  Table
} from 'react-bootstrap';

import {
  addAccount,
  setBitcoin,
} from '../firebase/actions';

class AccountDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      echange: JSON.parse(localStorage.getItem('echange')),
      bankName: '',
      accName: '',
      accNum: '',
      btcAdd: ''
    }

    // The React Team Recommends binding component functions to the this keyword
    // when using ES6 classes
    // This makes them available to the component object and not the window object
    this.handleBankNameChange = this.handleBankNameChange.bind(this)
    this.handleAccNumChange = this.handleAccNumChange.bind(this)
    this.handleAccNameChange = this.handleAccNameChange.bind(this)
    this.handleBtcChange = this.handleBtcChange.bind(this)
    this.handleAddAccount = this.handleAddAccount.bind(this)
    this.handleBtcSet = this.handleBtcSet.bind(this)

  }

  handleBankNameChange(e) {
    this.setState({ bankName: e.target.value })
  }

  handleAccNumChange(e) {
    this.setState({ accNum: e.target.value })
  }

  handleAccNameChange(e) {
    this.setState({ accName: e.target.value })
  }

  handleBtcChange(e) {
    this.setState({ btcAdd: e.target.value })
  }

  handleAddAccount(e) {
    e.preventDefault();
    addAccount(this.state.bankName, this.state.accName, this.state.accNum);
  }

  handleBtcSet(e) {
    e.preventDefault();
    setBitcoin(this.state.btcAdd)
  }

  render() {
    return (
      <div>
        <h4>Account Details</h4>
        <hr />

        {!this.state.echange.verified ? (
          <Alert bsStyle='danger' >
            <h4>Your Account is Unverified</h4>
            <p>You may not be allowed to complete large volume Transactions.</p>
            <p>Upload a copy of your Government-issued ID card to verify your account and become eligible for large volume transactions <span>( > NGN 100,000)</span></p>
            <br />
            <Button>Verify Account</Button>
          </Alert>
        ) : (<hr />)}

        <Panel>
          <h4>Add Bank Account:</h4>
          <p>You need to add a valid Bank Account to sell Bitcoin</p>
          <p>Third Party Bank Accounts are NOT allowed</p>
          <p>Only Bank Accounts in your REAL NAME will be accepted</p>
          <br />
          <Form>
            <FormGroup>
              <b>Bank Name</b>
              <FormControl type='text' placeholder='Bank Name' onChange={this.handleBankNameChange} />
            </FormGroup>
            <FormGroup>
              <b>Account Name</b>
              <FormControl type='text' placeholder='Valid Account Name' onChange={this.handleAccNameChange} />
            </FormGroup>

            <FormGroup>
              <b>Account Number</b>
              <FormControl type='number' placeholder='NUBAN Account Number' onChange={this.handleAccNumChange} />
            </FormGroup>
            <Button type='submit' bsStyle='primary' onClick={this.handleAddAccount} >Submit Bank Account</Button>
          </Form>
        </Panel>

        <Panel>
          <h4>Add Bitcoin Address</h4>
          <p>This will be your default Bitcoin Address and can be selected for all Transactions. Refunds will also be sent to this address.</p>
          <Form>
            <FormGroup>
              <b>Bitcoin Address</b>
              <FormControl type='text' placeholder='Valid Bitcoin Wallet Address' onChange={this.handleBtcChange} />
            </FormGroup>
            <Button type='submit' bsStyle='primary' onClick={this.handleBtcSet} >Set Bitcon Address</Button>
          </Form>
        </Panel>

        <Panel>
          <h4>Saved Accounts</h4>
          <br />

            {/* Table to Display saved User Bank Account Details.
              Iteration is done with Object.Keys, accessing state data in resBank
            */}

          <Table striped condensed hover responsive bordered >
            <thead>
              <tr>
                <th>#</th>
                <th>BANK</th>
                <th>ACC NAME</th>
                <th>ACC NUMBER</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.echange.bankDetails ? (
                <tr>
                  <td>No Records Found</td>
                </tr>
              ) : Object.keys(this.state.echange.bankDetails).map((key, i) => {
                var resBank = this.state.echange.bankDetails[key];
                return (
                  <tr>
                    <td>{i+1}</td>
                    <td>{resBank.bankName}</td>
                    <td>{resBank.accName}</td>
                    <td>{resBank.accNum}</td>
                  </tr>
                )
              })

              }
            </tbody>
          </Table>

          <h5>Default Bitcoin Address: {this.state.echange.defaultBTC ? (
            <a href="http://blockchain.info/wallet"><Label bsStyle='primary' >{this.state.echange.defaultBTC}</Label></a>
          ) : (
              'None Set'
            )} </h5>
        </Panel>

      </div>
    );
  }
}

export default AccountDetails;