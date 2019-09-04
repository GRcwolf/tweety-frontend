/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Helmet from 'react-helmet';
import HomePage from 'containers/HomePage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import 'materialize-css/dist/js/materialize.min';

import Header from 'containers/Header';
import LoginPage from 'containers/LoginPage/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet>
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
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
      </div>
    </div>
  );
}
