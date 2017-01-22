import React, { Component } from 'react';

import {
  Table,
  Label
} from 'react-bootstrap';

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
            ) : (
                <tr>
                  <td>Table Map Logic here</td>
                </tr>
              )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TransactionTable