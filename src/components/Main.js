import React, { Component } from 'react';

import HomeNav from './HomeNav';
import MyFooter from './MyFooter';

class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <HomeNav />
        {this.props.children}
        <MyFooter />
      </div>
    );
  }
}

export default Main;