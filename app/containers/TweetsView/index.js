import React, { useEffect } from 'react';
import { Row } from 'react-materialize';
import Tweet from 'containers/Tweet';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getUser } from 'containers/App/actions';
import { NO_TWEETS_FOUND_ERROR_MESSAGE, REFRESH_INTERVAL } from './constants';
import saga from './saga';
import reducer from './reducer';
import { getTopic, getTweets } from './actions';
import {
  makeSelectTweets,
  makeSelectTopic,
  makeSelectTopicLoaded,
  makeSelectTweetsLoaded,
} from './selectors';

const key = 'tweetsView';

const TweetsView = ({
  tweetAttributes,
  topic,
  topicLoaded,
  loadTopic,
  loadTweets,
  tweetsLoaded,
}) => {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  useEffect(() => {
    if (!topicLoaded) {
      loadTopic();
    }
    if (tweetsLoaded < Date.now() - REFRESH_INTERVAL) {
      loadTweets();
    }
  });

  return (
    <>
      <Row>
        <h1>{topic}</h1>
      </Row>
      <Row>
        <div className="tweet-overview col s12">
          {renderTweets(tweetAttributes)}
        </div>
      </Row>
    </>
  );
};

function renderTweets(tweetAttributes) {
  const renderElements = [];
  if (tweetAttributes.length > 0) {
    for (
      let elementIndex = 0;
      tweetAttributes.length > elementIndex;
      elementIndex += 1
    ) {
      const attributes = tweetAttributes[elementIndex];
      renderElements.push(
        <Row>
          <Tweet {...attributes} />
        </Row>,
      );
    }
  } else {
    renderElements.push(
      <Row>
        <span className="error-message">{NO_TWEETS_FOUND_ERROR_MESSAGE}</span>
      </Row>,
    );
  }
  return renderElements;
}

TweetsView.propTypes = {
  tweetAttributes: PropTypes.object,
  topic: PropTypes.string,
  topicLoaded: PropTypes.bool,
  loadTopic: PropTypes.func,
  loadTweets: PropTypes.func,
  tweetsLoaded: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  tweetAttributes: makeSelectTweets(),
  topic: makeSelectTopic(),
  topicLoaded: makeSelectTopicLoaded(),
  tweetsLoaded: makeSelectTweetsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTopic: () => dispatch(getTopic()),
    loadTweets: () => dispatch(getTweets()),
    loadUser: user => dispatch(getUser(user)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetsView);
