import React, { Component } from 'react';
import logo from './logo.svg';
import {MessageViewer} from './pages';

import './_styles/base.scss';

class App extends Component {
  render() {
    return (
      <MessageViewer/>
    );
  }
}

export default App;
