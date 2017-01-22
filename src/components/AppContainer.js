import React, { Component } from 'react';

import { getRates } from '../firebase/actions';

class AppContainer extends Component {

    componentWillMount () {
      getRates();
    }

  render () {
    return (
      <div className='container-fluid'>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;