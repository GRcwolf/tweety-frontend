import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ content }) => (
  <div className="tweet-wrapper col s12">
    <div className="tweet-content">
      <pre>{content}</pre>
    </div>
  </div>
);

Tweet.propTypes = {
  content: PropTypes.string,
};

export default Tweet;
