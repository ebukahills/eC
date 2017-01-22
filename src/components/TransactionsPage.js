import React, { Component } from 'react';

import {
  Accordion,
  Panel,
  Label
} from 'react-bootstrap';

import { Link } from 'react-router';



class TransactionsPage extends Component {

  constructor(props) {
    super(props);
    this.state = { echange: JSON.parse(localStorage.getItem('echange')) }
  }

  render() {
    return (
      <div>
        <h4>Transactions</h4>
        <hr />

        {!this.state.echange.transactions ? (
          <p>No Transactions Found</p>
        ) : (
            <Accordion>
              {Object.keys(this.state.echange.transactions).map((key, i) => {
                var tData = this.state.echange.transactions[key];
                var tHeader = 'Transaction #' + (i + 1).toString() + ' | ' + tData.btcAmount.toString() + 'BTC - ' + tData.time;
                return (
                  <Panel header={tHeader} eventKey={(i + 1).toString()} >
                    <p><u>eChange Transaction</u></p>
                    <br />
                    <p>Transactiion ID: {key}</p>
                    <p>Transaction Time: {tData.time}</p>
                    <p>Transaction Rate: {'1BTC = NGN' + (tData.ngnAmount / tData.btcAmount).toString() + ' = $' + (tData.dolAmount / tData.btcAmount).toString()}</p>
                    <p>Bitcoin Value: {tData.btcAmount.toString()}BTC</p>
                    <p>NGN Value: {tData.ngnAmount}</p>
                    <p>Transaction Status: <Label bsStyle={tData.statusLabel} >{tData.status}</Label></p>
                    <br />
                    <Link to='/main/support' ><p>Contact Support</p></Link>
                  </Panel>
                )
              })}
            </Accordion>
          )}

      </div>
    );
  }
}

export default TransactionsPage;