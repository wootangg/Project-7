import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
