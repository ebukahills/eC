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

class AccountDetails extends Component {
  render () {
    return (
      <div>
        <h4>Account Details</h4><hr/>

        <Alert bsStyle='danger' >
          <h4>Your Account is Unverified</h4>
          <p>You may not be allowed to complete large volume Transactions.</p>
          <p>Upload a copy of your Government-issued ID card to verify your account and become eligible for large volume transactions <span>( > NGN 50,000)</span></p>
          <br/>
          <Button>Verify Account</Button>
        </Alert>

        <Panel>
          <h4>Add Bank Account:</h4>
          <p>You need to add a valid Bank Account to sell Bitcoin</p>
          <p>Third Party Bank Accounts are NOT allowed</p>
          <p>Only Bank Accounts in your REAL NAME will be accepted</p>
          <br/>
          <Form>
            <FormGroup>
              <b>Account Name</b>
              <FormControl type='text' placeholder='Valid Account Name' />
            </FormGroup>
            <FormGroup>
              <b>Bank Name</b>
              <FormControl type='text' placeholder='Bank Name' />
            </FormGroup>
            <FormGroup>
              <b>Account Number</b>
              <FormControl type='number' placeholder='NUBAN Account Number' />
            </FormGroup>
            <Button type='submit' bsStyle='primary' >Submit Bank Account</Button>
          </Form>
        </Panel>

        <Panel>
          <h4>Add Bitcoin Address</h4>
          <p>This will be your default Bitcoin Address and can be selected for all Transactions. Refunds will also be sent to this address.</p>
          <Form>
            <FormGroup>
              <b>Bitcoin Address</b>
              <FormControl type='text' placeholder='Valid Bitcoin Wallet Address' />
            </FormGroup>
            <Button type='submit' bsStyle='primary' >Set Bitcon Address</Button>
          </Form>
        </Panel>

        <Panel>
          <h4>Saved Accounts</h4>
          <br/>

          <Table striped condensed hover responsive bordered >
            <thead>
              <tr>
                <th>#</th>
                <th>BANK</th>
                <th>ACC NAME</th>
                <th>ACC NUMBER</th>
                <th>Action</th>              
              </tr>
            </thead>
            <tbody>
              <tr>        
                <td>No Records Found</td>
              </tr>              
            </tbody>            
          </Table>

          <h5>Default Bitcoin Address: <a href="http://blockchain.info"><Label bsStyle='primary' >1cDr56W3vet40enNgeQerNT535ubVqT</Label></a></h5>
        </Panel>

      </div>
    );
  }
}

export default AccountDetails;