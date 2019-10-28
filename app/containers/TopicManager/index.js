import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser } from 'containers/App/selectors';
import { Row, Icon, Button } from 'react-materialize';
import { makeSelectTopics, makeSelectTopicsLoaded } from './selector';
import { getTopics } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'topicManager';

const TopicManager = ({ user, topics, topicsLoaded, onGetTopics }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!topicsLoaded || topics.length === 0) {
      onGetTopics();
    }
  });

  if (!user.admin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Row>
        <h1>Topics</h1>
      </Row>
      <Row>{renderTopics(topics)}</Row>
    </>
  );
};

function renderTopics(topics) {
  const elements = [];
  for (let i = 0; i < topics.length; i += 1) {
    if (topics[i] && topics[i].topic) {
      elements.push(
        <Row>
          <Row>
            <h2>{topics[i].topic}</h2>
          </Row>
          <Row>
            <Button waves="light">
              Activate
              <Icon right>check</Icon>
            </Button>
          </Row>
        </Row>,
      );
    }
  }
  return elements;
}

TopicManager.propTypes = {
  user: PropTypes.object,
  topics: PropTypes.object,
  topicsLoaded: PropTypes.bool,
  onGetTopics: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  topics: makeSelectTopics(),
  topicsLoaded: makeSelectTopicsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetTopics: () => dispatch(getTopics()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicManager);
