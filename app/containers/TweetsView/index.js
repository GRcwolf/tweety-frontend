import React from 'react';
import { Row } from 'react-materialize';
import Tweet from 'components/Tweet';
import PropTypes from 'prop-types';
import { NO_TWEETS_FOUND_ERROR_MESSAGE } from './constants';

const key = 'tweetsView';

const TweetsView = ({ tweetAttributes }) => (
  <Row>
    <div className="tweet-overview col s12">
      {renderTweets(tweetAttributes)}
    </div>
  </Row>
);

function renderTweets(tweetAttributes) {
  const renderElements = [];
  if (tweetAttributes.length > 0) {
    for (const elementIndex in tweetAttributes) {
      renderElements.push(
        <Row>
          <Tweet {...tweetAttributes[elementIndex]} />
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
};

export default TweetsView;
