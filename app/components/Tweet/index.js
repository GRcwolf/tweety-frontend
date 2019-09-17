import React from 'react';
import PropTypes from 'prop-types';

export default class Tweet extends React.Component {
  propTypes = {
    userId: PropTypes.string,
    topic: PropTypes.string,
    content: PropTypes.string,
    timePublished: PropTypes.number,
  };

  /**
   * Constructs a new Tweet.
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    const { userId, topic, content, timePublished } = props;
    this.userId = userId;
    this.topic = topic;
    this.content = content;
    this.timePublished = timePublished;
  }

  render() {
    return (
      <div className="tweet-wrapper col s12">
        <div className="tweet-content">{this.content}</div>
      </div>
    );
  }
}
