import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Helmet from 'react-helmet';
import HomePage from 'containers/HomePage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import 'materialize-css/dist/js/materialize.min';

import Header from 'containers/Header';
import LogOut from 'containers/LogOut/Loadable';
import CreateTweetForm from 'containers/CreateTweetForm/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ErrorMessages from 'containers/ErrorMessages';
import GlobalStyle from '../../global-styles';
import { SITE_NAME } from './constants';

const App = () => (
  <div>
    <Helmet>
      <title>{SITE_NAME}</title>
      <link
        href="http://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div className="container">
      <div className="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/logout" component={LogOut} />
          <Route exacr path="/create-tweet" component={CreateTweetForm} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
        <ErrorMessages />
      </div>
    </div>
  </div>
);

export default App;
