import React, { Component } from 'react';

import {
  Button,
  Panel
} from 'react-bootstrap';

class ReferralsPage extends Component {
  render () {
    return (
      <div>
        <h4>Referrals</h4><hr/>

        <p>Here at eChange, we give our users the opportunity to make money by inviting new users to the system.</p>
        <p>We pay you 2 Naira for every $ bought or sold by your referrals on our site. Your referral bonuses are available for payout at anytime.</p>
        <br/>
        <p>Share the referral link below to start earning Referral Commissions.</p>
        <a href="https://eChange.com/ref/438756">https://eChange.com/ref/438756</a>
        
        <Panel>
          <h5>Withdraw Referral Commission</h5>
          <h6>Total Commission: NGN 450</h6>
          <Button bsStyle='success' >Withdraw</Button>
        </Panel>
        <p>Bloggers, Writers, Internet Marketers etc can make money by referring users to our site. You can find promotion links and banners below to add to your website and increase the reach of your Referral Campaign</p> 
      </div>
    );
  }
}

export default ReferralsPage;