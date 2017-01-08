import React, { Component } from 'react';

import {
  Well,
  Col
} from 'react-bootstrap';

class LBCAdvert extends Component {
  render() {
    return (
      <div className='isCenter'>
        <Col>
          <Well bsSize='small' >
            <h4>Need Escrow?</h4>
            <h6>Find us on <a href="https://localbitcoins.com/ad/391850" target='_blank' >LocalBitcoins</a>!</h6>
            <iframe allowTransparency="true" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" width="230" height="50" src="https://localbitcoins.com/ad-embed/391850/half-banner"></iframe>
          </Well>
        </Col>
      </div>
    );
  }
}

export default LBCAdvert;