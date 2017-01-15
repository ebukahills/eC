import React, {Component} from 'react';

import { Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class MainSupport extends Component {
  render () {
    return (
      <div>
        <h4>eChange Support</h4><hr/>
        <p>Have any Problems? Questions?</p>
        <p>Need to know more about how to Buy or Sell Bitcoin?</p>
        <p>You can reach eChange Support through the following channels:</p>
        <br/>
        <div>
          <Panel>
            <p>Mobile: (+234) 803 456 7890</p>
            <p>Whatsapp: (+234) 803 456 7890</p>
            <p>Twitter: <a href="https://twitter.com/eChangeNG" target='_blank' >@eChangeNG</a> </p>
            <p>eMail: <a href="mailto:support@echange.ng?Subject=eChange%20Support" target='_blank'>support@eChange.NG</a> </p>
          </Panel>
        <p>You can also reach us by clicking on the Live Chat Button below and sending us a message. We'd be Happy to hear from You.</p>
        <p>Our Support Channels are availabe all day. Messages sent during the weekend may however experience slight delays in reply.</p>
        <br/>
        <hr/>
        <p>Thank You for using eChange.NG <FontAwesome name='heart' size='2x' className='redC' /> </p>
        <hr/>
        </div>
      </div>
    )
  }
}

export default MainSupport