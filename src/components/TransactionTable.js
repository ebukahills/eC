import React, { Component } from 'react';

import {
  Table,
  Label
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'

class TransactionTable extends Component {
  render() {
    return (
      <div>
        <Table striped condensed hover responsive bordered >
          <thead>
            <tr>
              <th>TYPE</th>
              <th>TIME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {!this.props.transactions ? (
              <tr>
                <td>No Transactions Found</td>
              </tr>
            ) : Object.keys(this.props.transactions).map((key) => {
              var transData = this.props.transactions[key];
              return (
                <LinkContainer to='/main/transactions' >
                  <tr>
                    <td>{transData.type}</td>
                    <td>{transData.time}</td>
                    <td>{transData.btcAmount}BTC - NGN {transData.ngnAmount} - ${transData.dolAmount}</td>
                    <td><Label bsStyle={transData.statusLabel} >{transData.status}</Label></td>
                  </tr>
                </LinkContainer>

              )
            })

            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TransactionTable