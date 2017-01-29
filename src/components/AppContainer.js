import React, { Component } from 'react';

import { getRates } from '../firebase/actions';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { eCRates: null }
  }

  componentDidMount() {
    getRates().then((success) => {
      this.setState({ eCRates: JSON.parse(localStorage.getItem('eCRates')) })
    })
  }

  render() {
    if (this.state.eCRates === null) {
      return (
        <div className="loadingPage isCenter">
          <i className="fa fa-cog fa-spin fa-5x fa-fw"></i>
          <h3>Loading eChange.NG</h3>
          <h4 className='typewriter' >Please Wait...</h4>
        </div>
      )
    } else {
      return (
        <div className='container-fluid'>
          {this.props.children}
        </div>
      )
    }
  }
}

export default AppContainer;





