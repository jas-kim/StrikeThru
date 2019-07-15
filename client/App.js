import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import AppBar from '../containers/AppBar.js';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <AppBar />
        <MainContainer />
      </div>
    )
  }
}

export default App;