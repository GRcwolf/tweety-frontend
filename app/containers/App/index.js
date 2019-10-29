import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import TopicManager from 'containers/TopicManager/Loadable';
import ErrorMessages from 'containers/ErrorMessages';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import GlobalStyle from '../../global-styles';
import { SITE_NAME } from './constants';
import { checkIfUserIsLoggedIn } from './actions';
import { makeSelectInitialCheck } from './selectors';
import saga from './saga';

const key = 'app';

const App = ({ initialAuthCheck, onCheckIfUserIsLoggedIn }) => {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!initialAuthCheck) {
      onCheckIfUserIsLoggedIn();
    }
  });

  return (
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
            <Route exact path="/create-tweet" component={CreateTweetForm} />
            <Route exact path="/topics" component={TopicManager} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
          <ErrorMessages />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  initialAuthCheck: PropTypes.bool,
  onCheckIfUserIsLoggedIn: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  initialAuthCheck: makeSelectInitialCheck(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCheckIfUserIsLoggedIn: () => dispatch(checkIfUserIsLoggedIn()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
