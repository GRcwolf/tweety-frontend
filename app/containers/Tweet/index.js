import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ content, creator }) => {
  const randomId = `${creator}${Date.now()}${Math.random()}`
  return (
    <tr className="tweet-wrapper col s12">
      <div className="tweet-content">
        <strong id={randomId}>{getCreator(creator, randomId)}</strong>
        <pre>{content}</pre>
      </div>
    </tr>
  )
};

function getCreator(id, randomId) {
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const { firstName, lastName } = JSON.parse(this.response);
      document.getElementById(randomId).innerHTML = `${firstName} ${lastName}`;
    }
  };
  xhrRequest.open('GET', `http://localhost:3000/getUserWithId?id=${id}`, true);
  xhrRequest.send();
}

Tweet.propTypes = {
  content: PropTypes.string,
  creator: PropTypes.string,
};

export default Tweet;
