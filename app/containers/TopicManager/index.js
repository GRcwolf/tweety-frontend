import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser } from 'containers/App/selectors';
import { Row, Icon, Button, TextInput } from 'react-materialize';
import { refreshTopic } from 'containers/TweetsView/actions';
import { REFRESH_INTERVAL } from './constants';
import {
  makeSelectNewTopicName,
  makeSelectTopics,
  makeSelectTopicsLoaded,
  makeSelectTopicToSet,
} from './selector';
import {
  getTopics,
  setTopicToSet,
  setTopic,
  changeTopicNameTextarea,
  createNewTopic,
} from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'topicManager';

const TopicManager = ({
  newTopic,
  user,
  topics,
  topicToSet,
  topicsLoaded,
  onGetTopics,
  onSetTopicToSet,
  onSetTopic,
  onRefreshTopic,
  onChangeTopicName,
  submitCreateTopic,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (topicsLoaded < Date.now() - REFRESH_INTERVAL || topics.length === 0) {
      onGetTopics();
    }

    if (topicToSet.length > 0) {
      onRefreshTopic();
      onSetTopic();
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
      <Row>{renderTopics(topics, onSetTopicToSet)}</Row>
      <Row>
        <form onSubmit={submitCreateTopic} className="col s12">
          <Row>
            <TextInput onChange={onChangeTopicName} s={12} value={newTopic} />
          </Row>
          <Row>
            <Button>
              Create topic
              <Icon right>add</Icon>
            </Button>
          </Row>
        </form>
      </Row>
    </>
  );
};

function renderTopics(topics, onSetTopicToSet) {
  const elements = [];
  for (let i = 0; i < topics.length; i += 1) {
    if (topics[i] && topics[i].topic) {
      elements.push(
        <Row>
          <Row>
            <h4>{topics[i].topic}</h4>
          </Row>
          <Row>
            {/* eslint-disable no-underscore-dangle */}
            <Button
              waves="light"
              onClick={() => onSetTopicToSet(topics[i]._id)}
            >
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
  newTopic: PropTypes.string,
  user: PropTypes.object,
  topics: PropTypes.object,
  topicToSet: PropTypes.string,
  topicsLoaded: PropTypes.bool,
  onGetTopics: PropTypes.func,
  onSetTopicToSet: PropTypes.object,
  onSetTopic: PropTypes.func,
  onRefreshTopic: PropTypes.func,
  onChangeTopicName: PropTypes.func,
  submitCreateTopic: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newTopic: makeSelectNewTopicName(),
  user: makeSelectUser(),
  topics: makeSelectTopics(),
  topicToSet: makeSelectTopicToSet(),
  topicsLoaded: makeSelectTopicsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetTopics: () => dispatch(getTopics()),
    onSetTopicToSet: id => dispatch(setTopicToSet(id)),
    onSetTopic: () => dispatch(setTopic()),
    onRefreshTopic: () => dispatch(refreshTopic()),
    onChangeTopicName: evt =>
      dispatch(changeTopicNameTextarea(evt.target.value)),
    submitCreateTopic: evt => {
      evt.preventDefault();
      dispatch(createNewTopic());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicManager);
