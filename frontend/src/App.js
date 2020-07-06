import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Posts from './Components/Posts/Posts'
import NewPost from './Components/Posts/NewPost'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Posts}/>
        <Route exact path='/new-post' component={NewPost}/>
      </div>
    );
  }
}

export default App;