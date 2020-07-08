import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Posts from './Components/Posts/Posts'
import NewPost from './Components/Posts/NewPost'
import Callback from './Auth/Callback';
import SecuredRoute from './Auth/SecuredRoute';
import auth0Client from './Auth/Auth';

class App extends Component {
  state = {
    checkingSession: true
  };

  async componentDidMount() {
    // /callback should handel login redirect
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession:false});
      return;
    }

    try { // if signed in, continue to whatever component
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }

    this.setState({checkingSession:false});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Posts}/>
        <SecuredRoute exact path='/new-post' component={NewPost} checkingSession={this.state.checkingSession}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default withRouter(App);