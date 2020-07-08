import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

// 1. it calls handleAuthentication method to fetch the user information sent by Auth0
// 2. it redirects to the home page
class Callback extends Component {
    async componentDidMount() {
      await auth0Client.handleAuthentication();
      this.props.history.replace('/');
    }
  
    render = () => {
      return <p>Loading profile...</p>;
    };
  }
  
  export default withRouter(Callback);