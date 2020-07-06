import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Posts from './Components/Posts/Posts'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Posts/>
      </div>
    );
  }
}

export default App;