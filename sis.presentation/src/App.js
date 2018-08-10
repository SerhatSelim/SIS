import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import * as actions from './store/actions/index';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

const asyncCourses = asyncComponent(() => {
  return import('./containers/Courses/Courses');
});

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      
        <Auth/>
      
    );
    if ( this.props.isAuthenticated ) {
      routes = (
        <Layout/>
      );
    }

    return (
   
      <div>
      
        {routes}
       
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

