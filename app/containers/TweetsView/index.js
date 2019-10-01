import React, { useEffect } from 'react';
import { Row } from 'react-materialize';
import Tweet from 'components/Tweet';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { NO_TWEETS_FOUND_ERROR_MESSAGE } from './constants';
import saga from './saga';
import reducer from './reducer';
import { getTopic } from './actions';
import {
  makeSelectTweets,
  makeSelectTopic,
  makeSelectTopicLoaded,
} from './selectors';

const key = 'tweetsView';

const TweetsView = ({ tweetAttributes, topic, topicLoaded, loadTopic }) => {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  useEffect(() => {
    if (!topicLoaded) {
      loadTopic();
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
  tweetAttributes: PropTypes.array,
  topic: PropTypes.string,
  topicLoaded: PropTypes.bool,
  loadTopic: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tweetAttributes: makeSelectTweets(),
  topic: makeSelectTopic(),
  topicLoaded: makeSelectTopicLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTopic: () => dispatch(getTopic()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetsView);
