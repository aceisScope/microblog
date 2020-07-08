import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Posts from './Components/Posts/Posts'
import NewPost from './Components/Posts/NewPost'
import Callback from './Auth/Callback';
import SecuredRoute from './Auth/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Posts}/>
        <SecuredRoute exact path='/new-post' component={NewPost}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;