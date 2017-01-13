import React, {Component} from 'react';

import {
  Table,
  Label
} from 'react-bootstrap';

class TransactionTable extends Component {
  render () {
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
            <tr>
              <td>BUY</td>
              <td>29/01/16, 15:33</td>
              <td>BTC 0.13 - NGN 51245 - $102.3</td>
              <td><Label bsStyle='success' >COMPLETED</Label></td>              
            </tr>
          </tbody>            
        </Table>
      </div>
    )
  }
}

export default TransactionTable